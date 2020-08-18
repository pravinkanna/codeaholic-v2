import React, { Component } from "react";
import "./IdeOutput.css";

import { Spinner } from "react-bootstrap";
export class IdeOutput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "",
      statusId: "",
      isError: false,
    };
  }

  componentDidUpdate() {
    // let result = "";
    // let output = "";
    // let statusId = "";
    // if (this.props.result) {
    //   result = this.props.result;
    //   output = result["stdout"] || result["stderr"] || result["error"] || result["compile_output"] || "";
    //   statusId = result.status["id"];
    //   this.setState({
    //     output: output,
    //     statusId: statusId,
    //   });
    // }
    if (this.props.result) console.log(this.props.result.status.id);
  }

  render() {
    let output,
      statusId,
      isError = false;
    const spinnerStyle = { color: "white", position: "absolute", top: "50%", left: "47%" };
    if (this.props.result) {
      statusId = this.props.result.status.id;
      if (statusId != 3) isError = true;
      output = this.props.result.stdout || this.props.result.stderr || this.props.result.error || this.props.result.compile_output || "";
    }
    return (
      <div className="IdeComponent IdeOutput">
        <p>Output</p>
        <textarea readOnly name="output" style={{ color: isError ? "#ff0033" : "#ffffff" }} disabled={this.props.isLoading} value={this.props.isLoading ? "" : output}></textarea>
        {this.props.isLoading ? <Spinner style={spinnerStyle} className="spinner" as="span" animation="border" size="lg" role="status" aria-hidden="true" /> : "Run"}
      </div>
    );
  }
}

export default IdeOutput;
