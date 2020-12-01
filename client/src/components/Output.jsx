import React, { useContext } from "react";
import "./Output.css";

import { Spinner } from "react-bootstrap";
import { IdeContext } from "../contexts/IdeContext";
export default function IdeOutput() {
  const { output, isError, isRunning } = useContext(IdeContext);

  const spinnerStyle = { color: "white", position: "absolute", top: "50%", left: "47%" };

  return (
    <div className="IdeComponent IdeOutput">
      <p>Output</p>
      <textarea readOnly name="output" style={{ color: isError ? "#ff0033" : "#ffffff" }} disabled={isRunning} value={isRunning ? "" : output}></textarea>
      {isRunning ? <Spinner style={spinnerStyle} className="spinner" as="span" animation="border" size="lg" role="status" aria-hidden="true" /> : ""}
    </div>
  );
}
