import React from "react";
import SimpleAppBar from "../AppBar/SimpleAppbar";
import CenteredGrid from "../CenteredGrid/CenteredGrid";

import "./App.css";

function App() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <div className="App">
        {/* <SimpleAppBar /> */}
        <CenteredGrid />
      </div>
    </div>
  );
}

export default App;
