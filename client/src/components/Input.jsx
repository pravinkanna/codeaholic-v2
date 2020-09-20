import React, { useContext } from "react";
import { IdeContext } from "../contexts/IdeContext";
import "./Input.css";

export default function IdeInput() {
  const { setInput } = useContext(IdeContext);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="input-component">
      <div className="input-nav">
        <p>Input</p>
      </div>
      <div className="input-textarea">
        <textarea type="text" onChange={handleChange}></textarea>
      </div>
    </div>
  );
}
