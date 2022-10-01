import React from "react";
import { useState } from "react";

import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";

import "./QRCreator.css";

export default function QRCreator() {
  const [urlInput, setUrlInput] = useState("");
  const [qrCodeURL, setQRCodeURL] = useState("");

  function generateQrCode(url) {
    QRCodeLink.toDataURL(
      url,
      {
        width: 500,
        margin: 3,
      },
      function (err, url) {
        setQRCodeURL(url);
      }
    );
  }

  function setQRCode(event) {
    setUrlInput(event.target.value);
    generateQrCode(event.target.value);
  }

  return (
    <div className="app">
      <QRCode value={urlInput} />

      <input
        placeholder="Insira o link aqui"
        className="user-input"
        value={urlInput}
        onChange={(e) => setQRCode(e)}
      />

      <a href={qrCodeURL} download="qr-code.png">
        Download
      </a>
    </div>
  );
}
