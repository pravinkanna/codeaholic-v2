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
      result: "",
      isLoading: false,
      width: window.width,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
    this.updateFontSize = this.updateFontSize.bind(this);
    this.updateCode = this.updateCode.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.updateResult = this.updateResult.bind(this);
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

  updateResult = (result) => {
    this.setState({ result: result }, () => {
      const output = this.state.result.data["stdout"] || this.state.result.data["stderr"] || this.state.result.data["error"] || this.state.result.data["compile_output"] || "";
      this.updateOutput(output);
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
    this.updateIsLoading(true);
    const languageId = this.languageId[this.state.language];
    const code = this.state.code;
    const input = this.state.input;
    const result = await run(languageId, code, input);
    this.updateResult(result.data);
    console.log("OnIDE", result.data);
    this.updateIsLoading(false);
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
                <IdeOutput output={this.state.output} result={this.state.result} isLoading={this.state.isLoading} />
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
                <IdeOutput output={this.state.output} result={this.state.result.data} isLoading={this.state.isLoading} />
              </SplitPane>
            </SplitPane>
          </SplitPane>
        </div>
      );
    }
  }
}

export default Ide;
