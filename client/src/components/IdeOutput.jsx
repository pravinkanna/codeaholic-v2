import React, { Component } from "react";
import "./IdeOutput.css";

import { Spinner } from "react-bootstrap";
export class IdeOutput extends Component {
  render() {
    const spinnerStyle = { color: "white", position: "absolute", top: "50%", left: "47%" };
    const isError = false; /*this.props.isError;*/
    return (
      <div className="IdeComponent IdeOutput">
        <p>Output</p>
        <textarea readOnly name="output" style={{ color: isError ? "#ff0033" : "#ffffff" }} disabled={this.props.isLoading} value={this.props.isLoading ? "" : this.props.output}></textarea>
        {this.props.isLoading ? <Spinner style={spinnerStyle} className="spinner" as="span" animation="border" size="lg" role="status" aria-hidden="true" /> : "Run"}
      </div>
    );
  }
}

export default IdeOutput;
