import React, { useEffect, useContext, useState } from "react";
import SplitPane from "react-split-pane";

import IdeNavbar from "./Navbar";
import IdeEditor from "./Editor";
import IdeInput from "./Input";
import IdeOutput from "./Output";
import IdeShareModal from "./ShareModal";
import IdeLoginModal from "./LoginModal";
import "./Ide.css";

import { IdeContext } from "../contexts/IdeContext";
import { getShare } from "../apis/share";

export default function Ide() {
  const [shareId, setShareId] = useState(null);
  const [resizeEditor, setResizeEditor] = useState(false);
  const { setCode, setLanguageId, width, setWidth } = useContext(IdeContext);

  const handleChange = () => setResizeEditor((prev) => !prev);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => setWidth(window.innerWidth);

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [width, setWidth]);

  useEffect(() => {
    //Function to get code from database and set to context
    const getSharedCode = async (shareId) => {
      const result = await getShare(shareId);
      setCode(result.data.data.source_code);
      setLanguageId(result.data.data.language_id);
    };

    //Extracting shareID from URL
    let search = window.location.search;
    let params = new URLSearchParams(search);
    setShareId(params.get("shareId"));
    if (shareId) {
      getSharedCode(shareId);
    }
  }, [shareId, setCode, setLanguageId]);

  return (
    <div className="Ide">
      <SplitPane split="horizontal" allowResize={false}>
        <IdeNavbar />
        <SplitPane split={width >= 767 ? "vertical" : "horizontal"} minSize={0} maxSize={-5} defaultSize="60%" onChange={handleChange}>
          <IdeEditor resizeEditor={resizeEditor} setResizeEditor={setResizeEditor} />
          <SplitPane split="horizontal" allowResize={false} defaultSize="50%">
            <IdeInput />
            <IdeOutput />
          </SplitPane>
        </SplitPane>
      </SplitPane>
      <IdeShareModal />
      <IdeLoginModal />
    </div>
  );
}
