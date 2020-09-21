import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


import { AuthProvider } from './contexts/AuthContext';
import { IdeProvider } from './contexts/IdeContext';

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <IdeProvider>
        <App />
      </IdeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);