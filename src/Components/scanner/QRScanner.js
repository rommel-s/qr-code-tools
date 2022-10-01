import { useState } from "react";
import { QrReader } from "react-qr-reader";

import { BiQrScan } from "react-icons/bi";

import "./QRScanner.css";

export default function QRScanner() {
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

  return (
    <div className="main-container">
      <section>
        <div className="frame"></div>
        <QrReader
          onResult={handleScanning}
          onScan={handleScan}
          constraints={{ facingMode: "environment" }}
          scanDelay={100}
          className={"scanner"}
          // style={previewStyle}
          // containerStyle={previewStyle}
        />
      </section>
      <a href={data} className="scan-btn">
        <BiQrScan size={25} />
      </a>
    </div>
  );
}
