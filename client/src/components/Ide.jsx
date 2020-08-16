import React, { Component } from "react";
import SplitPane from "react-split-pane";
import IdeNavbar from "./IdeNavbar";
import IdeEditor from "./IdeEditor";
import IdeInput from "./IdeInput";
import IdeOutput from "./IdeOutput";
import "./Ide.css";

import { run } from "../api/run";

export class Ide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "c",
      fontSize: 16,
      code: "",
      input: "",
      output: "",
      token: "",
      isLoading: false,
      width: window.width,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
    this.updateFontSize = this.updateFontSize.bind(this);
    this.updateCode = this.updateCode.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.updateOutput = this.updateOutput.bind(this);
    this.updateIsLoading = this.updateIsLoading.bind(this);
  }

  languageId = {
    c: "50",
    cpp: "54",
    java: "62",
    python: "71",
  };

  updateLanguage = (language) => {
    this.setState({
      language: language,
    });
  };

  updateFontSize = (fontSize) => {
    fontSize = Number(fontSize);
    this.setState({
      fontSize: fontSize,
    });
  };

  updateCode = (code) => {
    this.setState({
      code: code,
    });
  };

  updateInput = (input) => {
    this.setState({
      input: input,
    });
  };

  updateOutput = (output) => {
    this.setState({
      output: output,
    });
  };

  updateWidth = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  updateIsLoading = (bool) => {
    this.setState({
      isLoading: bool,
    });
  };

  runCode = async () => {
    const languageId = this.languageId[this.state.language];
    const code = this.state.code;
    const input = this.state.input;
    run(this.updateIsLoading, this.updateOutput, languageId, code, input);
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth, { passive: false });
    this.updateWidth();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth, { passive: false });
  }

  render() {
    if (this.state.width > 767) {
      return (
        <div className="Ide">
          <SplitPane split="horizontal" allowResize={false}>
            <IdeNavbar triggerLanguageUpdate={this.updateLanguage} triggerFontSizeUpdate={this.updateFontSize} shareCode={this.shareCode} code={this.state.code} />
            <SplitPane split="vertical" minSize={0} maxSize={-1} defaultSize="60%">
              <IdeEditor language={this.state.language} fontSize={this.state.fontSize} triggerCodeUpdate={this.updateCode} isLoading={this.state.isLoading} code={this.state.code} run={this.runCode} />
              <SplitPane split="horizontal" allowResize={false} defaultSize="50%">
                <IdeInput triggerInputUpdate={this.updateInput} />
                <IdeOutput result={this.state.output} isLoading={this.state.isLoading} />
              </SplitPane>
            </SplitPane>
          </SplitPane>
        </div>
      );
    } else {
      return (
        <div className="Ide">
          <SplitPane split="horizontal" allowResize={false}>
            <IdeNavbar triggerLanguageUpdate={this.updateLanguage} triggerFontSizeUpdate={this.updateFontSize} shareCode={this.shareCode} code={this.state.code} />
            <SplitPane split="horizontal" minSize={0} maxSize={-5} defaultSize="50%">
              <IdeEditor language={this.state.language} fontSize={this.state.fontSize} triggerCodeUpdate={this.updateCode} isLoading={this.state.isLoading} code={this.state.code} run={this.runCode} />
              <SplitPane split="horizontal" allowResize={false} defaultSize="50%">
                <IdeInput triggerInputUpdate={this.updateInput} />
                <IdeOutput result={this.state.output} isLoading={this.state.isLoading} />
              </SplitPane>
            </SplitPane>
          </SplitPane>
        </div>
      );
    }
  }
}

export default Ide;
