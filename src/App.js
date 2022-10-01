import React from "react";

import "./App.css";
import QRCreator from "./Components/creator/QRCreator";
import QRScanner from "./Components/scanner/QRScanner";
import Tabs from "./Components/tabs/Tabs";

function App() {
  return (
    <div className="main-app">
      <Tabs />
    </div>
  );
}

export default App;
