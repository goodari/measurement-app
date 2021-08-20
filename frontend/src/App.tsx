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
      <header className="mt-7 mb-3 text-center">
        <div className="text-4xl font-bold">Tamtron Weighing App</div>
        <div className="text-xl mt-2">
          For extremely accurate weighing results
        </div>
      </header>
      <Routes />
    </div>
  );
}

export default App;
