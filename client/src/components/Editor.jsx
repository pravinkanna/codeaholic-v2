import React, { useRef, useContext, useEffect } from "react";
import { IdeContext } from "../contexts/IdeContext";
import AceEditor from "react-ace";
import { Button, Spinner } from "react-bootstrap";

import { Event } from "../tracking";
import { run } from "../apis/run";
import { save } from "../apis/save";

import "./Editor.css";

import "ace-builds/src-min-noconflict/mode-c_cpp";
import "ace-builds/src-min-noconflict/mode-python";
import "ace-builds/src-min-noconflict/mode-java";
import "ace-builds/src-min-noconflict/mode-javascript";
import "ace-builds/src-min-noconflict/mode-php";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/webpack-resolver";

function IdeEditor(props) {
  const aceEditor = useRef(null);
  const { languageId, fontSize, code, setCode, input, setIsError, isRunning, isSaving, setOutput, setIsRunning, setIsSaving } = useContext(IdeContext);
  const title = "TEST";
  const modes = {
    50: "c_cpp",
    54: "c_cpp",
    62: "java",
    63: "javascript",
    71: "python",
    68: "php",
    82: "mysql",
  };

  const handleChange = () => {
    setCode(aceEditor.current.editor.getValue());
  };

  const handleRun = () => {
    runCode();
    Event("Run", "Run Button", "IDE_PAGE");
  };

  const handleSave = () => {
    console.log("SAVE1");
    saveCode();
    Event("Save", "Save Button", "IDE_PAGE");
  };

  useEffect(() => {
    aceEditor.current.editor.resize();
  }, [props.resizeEditor]);

  const runCode = async () => {
    try {
      //Starting Spinner
      setIsRunning(true);

      //Passing to run function
      const result = await run(languageId, code, input);

      //Setting Output in State
      const output = result.data.data.stdout || result.data.data.stderr || result.data.data.error || result.data.data.compile_output || result.data.data.message || "";
      setOutput(output);

      //Setting Status ID in States
      result.data.data.status.id === 3 ? setIsError(false) : setIsError(true);

      //Stopping Spinner
      setIsRunning(false);
    } catch (err) {
      console.log(err);
    }
  };

  const saveCode = async () => {
    try {
      //Starting Spinner
      setIsSaving(true);

      //Passing to run function
      const result = await save(title, languageId, code);

      console.log("SAVE result: ", result);

      //Stopping Spinner
      setIsSaving(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="IdeEditor IdeComponent">
      <div className="editor-header">
        <p className="editor-title">Your&nbsp;Code</p>
        <ul className="editor-nav">
          <li>
            <Button variant="primary" size="sm" onClick={handleSave} disabled={isEmpty(code) || isSaving}>
              {isSaving ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : <i className="fas fa-save">&nbsp;&nbsp;Save</i>}
            </Button>
          </li>
          <li>
            <Button variant="success" size="sm" onClick={handleRun} disabled={isEmpty(code) || isRunning}>
              {isRunning ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : <i className="fas fa-play">&nbsp;&nbsp;Run</i>}
            </Button>
          </li>
        </ul>
      </div>

      <AceEditor
        ref={aceEditor}
        onChange={handleChange}
        mode={modes[languageId]}
        theme="monokai"
        editorProps={{ $blockScrolling: true }}
        showPrintMargin={false}
        showGutter={true}
        focus={true}
        fontSize={fontSize}
        highlightActiveLine={false}
        placeholder={"Write your code Here"}
        width="100%"
        value={code}
        setOptions={{
          tabSize: 4,
        }}
      />
    </div>
  );
}

const isEmpty = (code) => {
  if (!code || code === undefined || code === "" || code.length === 0) return true;
  return false;
};

export default IdeEditor;
