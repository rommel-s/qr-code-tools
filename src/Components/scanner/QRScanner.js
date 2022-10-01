import { useState } from "react";
import { QrReader } from "react-qr-reader";

import "./QRScanner.css";

export default function App() {
  // const [selected, setSelected] = useState("environment");
  const [data, setData] = useState("No");

  const handleScan = (result) => {
    if (result && result) {
      setData(result);
      // window.location.href = data;
      console.log(setData);
    }
  };

  const handleScanning = (res, err) => {
    if (res) {
      setData(res.text);
    }
    if (err) {
      console.log(err.text);
    }
  };

  const previewStyle = {
    heigth: 100,
    width: 100,
    display: "flex",
    "justify-content": "center",
  };

  return (
    <div className="main-container">
      <section>
        <div className="frame"></div>
        <QrReader
          onResult={handleScanning}
          onScan={handleScan}
          constraints={{ facingMode: "environment" }}
          scanDelay={1000}
          className={"scanner"}
          // style={previewStyle}
          // containerStyle={previewStyle}
        />
      </section>
      <a href={data}>{data}</a>
    </div>
  );
}
