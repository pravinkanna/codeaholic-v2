import React, { Component } from "react";
import AceEditor from "react-ace";
import { Button, Spinner } from "react-bootstrap";
import "./IdeEditor.css";

import "ace-builds/src-min-noconflict/mode-c_cpp";
import "ace-builds/src-min-noconflict/mode-python";
import "ace-builds/src-min-noconflict/mode-java";

import "ace-builds/webpack-resolver";

class IdeEditor extends Component {
  constructor(props) {
    super(props);
    this.aceEditor = React.createRef();
    this.state = {
      isEmpty: true,
    };
  }

  modes = {
    c: "c_cpp",
    cpp: "c_cpp",
    java: "java",
    python: "python",
  };

  handleChange = () => {
    const code = this.aceEditor.current.editor.getValue();
    this.props.triggerCodeUpdate(code);
  };

  handleClick = () => {
    this.props.run();
  };

  componentDidUpdate() {
    this.aceEditor.current.editor.resize();
  }

  render() {
    const { language, fontSize } = this.props;

    return (
      <div className="IdeEditor IdeComponent">
        <ul className="EditorNav">
          <li>
            <p>Your&nbsp;Code</p>
          </li>
          <li>
            <Button variant="primary" size="sm" onClick={this.handleClick} disabled={isEmpty(this.props.code) || this.props.isLoading}>
              {this.props.isLoading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Run"}
            </Button>
          </li>
        </ul>

        <AceEditor
          ref={this.aceEditor}
          onChange={this.handleChange}
          mode={this.modes[language]}
          theme="monokai"
          showPrintMargin={false}
          showGutter={true}
          focus={true}
          fontSize={fontSize}
          highlightActiveLine={false}
          placeholder={"Write your code Here"}
          width="100%"
          height="100%"
          setOptions={{
            tabSize: 4,
          }}
        />
      </div>
    );
  }
}

const isEmpty = (code) => {
  if (!code || code === undefined || code === "" || code.length === 0) return true;
  return false;
};

export default IdeEditor;
