import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = document.getElementById('root'); // Corrected syntax for selecting the root element
const rootElement = root ? ReactDOM.createRoot(root) : null; // Creating a root if 'root' element is found
if (rootElement) {
  rootElement.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
}
