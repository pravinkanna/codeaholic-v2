import React, { useRef, useContext, useEffect } from "react";
import { IdeContext } from "../contexts/IdeContext";
import AceEditor from "react-ace";
import { Button, Spinner } from "react-bootstrap";

import { Event } from "./tracking";
import { run } from "../apis/run";

import "./IdeEditor.css";

import "ace-builds/src-min-noconflict/mode-c_cpp";
import "ace-builds/src-min-noconflict/mode-python";
import "ace-builds/src-min-noconflict/mode-java";
import "ace-builds/src-min-noconflict/mode-javascript";
import "ace-builds/src-min-noconflict/mode-php";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/webpack-resolver";

function IdeEditor(props) {
  const aceEditor = useRef(null);
  const { languageId, fontSize, code, setCode, input, setIsError, isLoading, setOutput, setIsLoading } = useContext(IdeContext);

  const modes = {
    50: "c_cpp",
    54: "c_cpp",
    62: "java",
    63: "javascript",
    71: "python",
    68: "php",
    82: "mysql",
  };

  const handleChange = () => {
    setCode(aceEditor.current.editor.getValue());
  };

  const handleClick = () => {
    runCode();
    Event("Run", "Code Run Button", "IDE_PAGE");
  };

  useEffect(() => {
    aceEditor.current.editor.resize();
  }, [props.resizeEditor]);

  const runCode = async () => {
    try {
      //Starting Spinner
      setIsLoading(true);

      //Passing to run function
      const result = await run(languageId, code, input);

      //Setting Output in State
      const output = result.data.data.stdout || result.data.data.stderr || result.data.data.error || result.data.data.compile_output || result.data.data.message || "";
      setOutput(output);

      //Setting Status ID in States
      result.data.data.status.id === 3 ? setIsError(false) : setIsError(true);

      //Stopping Spinner
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="IdeEditor IdeComponent">
      <ul className="EditorNav">
        <li>
          <p>Your&nbsp;Code</p>
        </li>
        <li>
          <Button variant="primary" size="sm" onClick={handleClick} disabled={isEmpty(code) || isLoading}>
            {isLoading ? (
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
            ) : (
              <>
                <i className="fas fa-play"></i>&nbsp;&nbsp;Run
              </>
            )}
          </Button>
        </li>
      </ul>

      <AceEditor
        ref={aceEditor}
        onChange={handleChange}
        mode={modes[languageId]}
        theme="monokai"
        editorProps={{ $blockScrolling: true }}
        showPrintMargin={false}
        showGutter={true}
        focus={true}
        fontSize={fontSize}
        highlightActiveLine={false}
        placeholder={"Write your code Here"}
        width="100%"
        value={code}
        setOptions={{
          tabSize: 4,
        }}
      />
    </div>
  );
}

const isEmpty = (code) => {
  if (!code || code === undefined || code === "" || code.length === 0) return true;
  return false;
};

export default IdeEditor;
