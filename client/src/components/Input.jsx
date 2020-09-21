import React, { useContext } from "react";
import { IdeContext } from "../contexts/IdeContext";
import "./Input.css";

export default function IdeInput() {
  const { setInput } = useContext(IdeContext);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="IdeComponent IdeInput">
      <p>Input</p>
      <textarea type="text" onChange={handleChange}></textarea>
    </div>
  );
}
