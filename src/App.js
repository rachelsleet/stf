import React from "react";
import Container from "./pages/container";
import "./App.scss";
import "./reset.scss";

function App() {
  return (
    <div className="App">
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <Container />
    </div>
  );
}

export default App;
