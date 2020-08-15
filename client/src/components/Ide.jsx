import React, { Component } from "react";
import SplitPane from "react-split-pane";
import IdeNavbar from "./IdeNavbar";
import IdeEditor from "./IdeEditor";
import IdeInput from "./IdeInput";
import IdeOutput from "./IdeOutput";
import "./Ide.css";

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
    this.toggleIsLoading = this.toggleIsLoading.bind(this);
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

  updateWidth = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  toggleIsLoading = () => {
    const x = this.state.isLoading ? false : true;
    this.setState({
      isLoading: x,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
    this.updateWidth();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    console.log(this.state.width);
    if (this.state.width > 767) {
      return (
        <div className="Ide">
          <SplitPane split="horizontal" allowResize={false}>
            <IdeNavbar triggerLanguageUpdate={this.updateLanguage} triggerFontSizeUpdate={this.updateFontSize} shareCode={this.shareCode} code={this.state.code} />
            <SplitPane split="vertical" minSize={0} maxSize={-1} defaultSize="60%">
              <IdeEditor language={this.state.language} fontSize={this.state.fontSize} triggerCodeUpdate={this.updateCode} isLoading={this.state.isLoading} runCode={this.runCode} code={this.state.code} />
              <SplitPane split="horizontal" allowResize={false} defaultSize="50%">
                <IdeInput triggerInputUpdate={this.updateInput} />
                <IdeOutput result={this.state.output} />
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
            <SplitPane split="horizontal" minSize={0} maxSize={-1} defaultSize="50%">
              <IdeEditor language={this.state.language} fontSize={this.state.fontSize} triggerCodeUpdate={this.updateCode} isLoading={this.state.isLoading} runCode={this.runCode} code={this.state.code} />
              <SplitPane split="horizontal" allowResize={false} defaultSize="50%">
                <IdeInput triggerInputUpdate={this.updateInput} />
                <IdeOutput result={this.state.output} />
              </SplitPane>
            </SplitPane>
          </SplitPane>
        </div>
      );
    }
  }
}

export default Ide;
