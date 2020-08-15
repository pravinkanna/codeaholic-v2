import React, { Component } from "react";
import "./IdeInput.css";

export class IdeInput extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.props.triggerInputUpdate(event.target.value);
  };

  render() {
    return (
      <div className="IdeComponent IdeInput">
        <p>Input</p>
        <textarea type="text" onChange={this.handleChange}></textarea>
      </div>
    );
  }
}

export default IdeInput;
