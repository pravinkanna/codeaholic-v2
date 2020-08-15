import React, { Component } from "react";
import "./IdeOutput.css";
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

    return (
      <div className="IdeComponent IdeOutput">
        <p>Output</p>
        <textarea readOnly name="output" value={output} style={{ color: color }}></textarea>
      </div>
    );
  }
}

export default IdeOutput;
