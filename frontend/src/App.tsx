import React from "react";
import { Helmet } from "react-helmet";

import "./App.css";
import Routes from "./router";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tamtron Measurement App</title>
      </Helmet>
      <Routes />
    </div>
  );
}

export default App;
