import React, { Component } from "react";
import "./IdeOutput.css";

import { Spinner } from "react-bootstrap";
export class IdeOutput extends Component {
  clean(obj) {
    var propNames = Object.getOwnPropertyNames(obj);
    for (var i = 0; i < propNames.length; i++) {
      var propName = propNames[i];
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
  }
  render() {
    let color;
    let output = this.props.result["stdout"] || this.props.result["stderr"] || this.props.result["error"] || this.props.result["compile_output"] || "";
    if (!this.props.result["stdout"]) color = "#ff0033";
    const spinnerStyle = { color: "white", position: "absolute", top: "50%", left: "47%" };
    return (
      <div className="IdeComponent IdeOutput">
        <p>Output</p>
        <textarea readOnly name="output" style={{ color: color }} disabled={this.props.isLoading} value={this.props.isLoading ? "" : output}></textarea>
        {this.props.isLoading ? <Spinner style={spinnerStyle} className="spinner" as="span" animation="border" size="lg" role="status" aria-hidden="true" /> : "Run"}
        {/* <div class="loader"></div> */}
      </div>
    );
  }
}

export default IdeOutput;
