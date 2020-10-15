import React from "react";
import "./App.css";
import Homepage from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Homepage value="1">
          <p>Hello World</p>
        </Homepage>
      </header>
    </div>
  );
}

export default App;
