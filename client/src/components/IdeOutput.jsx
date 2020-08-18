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

  render() {
    const spinnerStyle = { color: "white", position: "absolute", top: "50%", left: "47%" };
    if (this.props.result) {
      console.log(this.props.isError, this.props.output);
    }
    return (
      <div className="IdeComponent IdeOutput">
        <p>Output</p>
        <textarea readOnly name="output" style={{ color: this.props.isError ? "#ff0033" : "#ffffff" }} disabled={this.props.isLoading} value={this.props.isLoading ? "" : this.props.output}></textarea>
        {this.props.isLoading ? <Spinner style={spinnerStyle} className="spinner" as="span" animation="border" size="lg" role="status" aria-hidden="true" /> : "Run"}
      </div>
    );
  }
}

export default IdeOutput;
