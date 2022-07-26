import React from "react";

import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="panel">
          <h3>Total docs on the server: 0</h3>
          <h2>Document list</h2>
          <div className="document-list">No documents to show yet.</div>
        </div>
        <div className="panel">
          <div className="dragdrop">
            <p>Drag to add new PDF file</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
