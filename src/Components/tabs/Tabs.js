import React from "react";
import { useState } from "react";

import "./Tabs.css";
import "../creator/QRCreator";
import "../scanner/QRScanner";
import QRCreator from "../creator/QRCreator";
import QRScanner from "../scanner/QRScanner";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="tabs">
      <ul className="nav">
        <li className={activeTab === "tab1" ? "active" : ""}>Criar QR Code</li>
        <li className={activeTab === "tab2" ? "active" : ""}>
          Scanear QR Code
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? <QRCreator /> : <QRScanner />}
      </div>
    </div>
  );
}
