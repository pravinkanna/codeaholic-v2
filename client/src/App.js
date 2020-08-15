import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Ide from "./components/Ide";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Ide></Ide>
        </div>
      </Router>
    );
  }
}

export default App;
