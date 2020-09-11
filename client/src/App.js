import React from "react";
import { PageView, initGA } from './components/tracking';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import { IdeProvider } from './contexts/IdeContext';
import Ide from "./components/Ide";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {

  initGA('UA-175900721-1');
  PageView();



  return (
    <div className="App">
      <AuthProvider>
        <IdeProvider>
          <Ide />
        </IdeProvider>
      </AuthProvider>
    </div>
  );
}


export default App;
