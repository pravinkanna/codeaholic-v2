import React, { Component } from "react";
import SplitPane from "react-split-pane";
import IdeNavbar from "./IdeNavbar";
import IdeEditor from "./IdeEditor";
import IdeInput from "./IdeInput";
import IdeOutput from "./IdeOutput";
import IdeModal from "./IdeModal";
import "./Ide.css";

import { run } from "../api/run";
import { share, getShare } from "../api/share";

export class Ide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageId: "50",
      fontSize: 16,
      code: "",
      input: "",
      output: "",
      result: "",
      shareId: "",
      isError: false,
      isLoading: false,
      modalShow: false,
      width: window.width,
    };

    // this.updateLanguage = this.updateLanguage.bind(this);
    // this.updateFontSize = this.updateFontSize.bind(this);
    // this.updateCode = this.updateCode.bind(this);
    // this.updateInput = this.updateInput.bind(this);
    // this.updateOutput = this.updateOutput.bind(this);
    // this.updateResult = this.updateResult.bind(this);
    // this.updateShareId = this.updateShareId.bind(this);
    // this.updateIsError = this.updateIsError.bind(this);
    // this.updateIsLoading = this.updateIsLoading.bind(this);
    // this.updateModalShow = this.updateModalShow.bind(this);
    // this.updateWidth = this.updateWidth.bind(this);
  }

  componentDidMount() {
    //Resizing Editor while resizing screen
    window.addEventListener("resize", this.updateWidth, { passive: false });
    this.updateWidth();

    //Extracting shareID from URL
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let shareId = params.get("shareId");
    if (shareId) console.log(this.getSharedCode(shareId));
  }

  componentWillUnmount() {
    //Resizing Editor while resizing screen
    window.removeEventListener("resize", this.updateWidth, { passive: false });
    this.updateWidth();
  }

  updateLanguage = (languageId) => {
    this.setState({
      languageId: languageId,
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
    this.setState({
      result: result,
    });
  };

  updateOutput = (output) => {
    this.setState({
      output: output,
    });
  };

  updateShareId = (shareId) => {
    this.setState({
      shareId: shareId,
    });
  };

  updateIsError = (isError) => {
    this.setState({
      isError: isError,
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

  updateModalShow = (bool) => {
    this.setState({
      modalShow: bool,
    });
  };

  runCode = async () => {
    try {
      //Starting Spinner
      this.updateIsLoading(true);

      //Getting values from state
      const languageId = this.state.languageId;
      const code = this.state.code;
      const input = this.state.input;

      //Passing to run function
      const result = await run(languageId, code, input);

      //Setting Output in State
      const output = result.data.data.stdout || result.data.data.stderr || result.data.data.error || result.data.data.compile_output || "";
      this.updateOutput(output);

      //Setting Status ID in Stateas
      result.data.data.status.id === 3 ? this.updateIsError(false) : this.updateIsError(true);

      //Stopping Spinner
      this.updateIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  shareCode = async () => {
    //Getting values from state
    const languageId = this.state.languageId;
    const code = this.state.code;
    //Passing to share function
    const shareId = await share(languageId, code);
    this.updateShareId(shareId.data.data._id);
    this.updateModalShow(true);
  };

  getSharedCode = async (shareId) => {
    const result = await getShare(shareId);
    console.log(result);
    this.updateCode(result.data.data.source_code);
    this.updateLanguage(result.data.data.language_id);
  };

  render() {
    if (this.state.width > 767) {
      return (
        <div className="Ide">
          <SplitPane split="horizontal" allowResize={false}>
            <IdeNavbar triggerLanguageUpdate={this.updateLanguage} triggerFontSizeUpdate={this.updateFontSize} shareCode={this.shareCode} languageId={this.state.languageId} fontSize={this.state.fontSize} code={this.state.code} />
            <SplitPane split="vertical" minSize={0} maxSize={-1} defaultSize="60%">
              <IdeEditor languageId={this.state.languageId} fontSize={this.state.fontSize} triggerCodeUpdate={this.updateCode} isLoading={this.state.isLoading} code={this.state.code} run={this.runCode} />
              <SplitPane split="horizontal" allowResize={false} defaultSize="50%">
                <IdeInput triggerInputUpdate={this.updateInput} />
                <IdeOutput output={this.state.output} isError={this.state.isError} isLoading={this.state.isLoading} />
              </SplitPane>
            </SplitPane>
          </SplitPane>
          <IdeModal triggerModalShowUpdate={this.updateModalShow} modalShow={this.state.modalShow} shareId={this.state.shareId} />
        </div>
      );
    } else {
      return (
        <div className="Ide">
          <SplitPane split="horizontal" allowResize={false}>
            <IdeNavbar triggerLanguageUpdate={this.updateLanguage} triggerFontSizeUpdate={this.updateFontSize} shareCode={this.shareCode} languageId={this.state.languageId} fontSize={this.state.fontSize} code={this.state.code} />
            <SplitPane split="horizontal" minSize={0} maxSize={-5} defaultSize="50%">
              <IdeEditor languageId={this.state.languageId} fontSize={this.state.fontSize} triggerCodeUpdate={this.updateCode} isLoading={this.state.isLoading} code={this.state.code} run={this.runCode} />
              <SplitPane split="horizontal" allowResize={false} defaultSize="50%">
                <IdeInput triggerInputUpdate={this.updateInput} />
                <IdeOutput output={this.state.output} isError={this.state.isError} isLoading={this.state.isLoading} />
              </SplitPane>
            </SplitPane>
          </SplitPane>
          <IdeModal triggerModalShowUpdate={this.updateModalShow} modalShow={this.state.modalShow} shareId={this.state.shareId} />
        </div>
      );
    }
  }
}

export default Ide;
