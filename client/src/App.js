import React, { Component } from "react";
import { PageView, initGA } from './components/tracking';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Ide from "./components/Ide";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


class App extends Component {

  componentDidMount() {
    initGA('UA-175900721-1');
    PageView();
  }

  render() {
    return (
      <div className="App">
        <Ide></Ide>
      </div>
    );
  }
}

export default App;
