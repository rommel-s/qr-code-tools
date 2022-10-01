import React from "react";

import "./App.css";
import QRCreator from "./Components/creator/QRCreator";
import QRScanner from "./Components/scanner/QRScanner";

function App() {
  return (
    <>
      {/* <QRCreator /> */}
      <QRScanner />
    </>
  );
}

export default App;
