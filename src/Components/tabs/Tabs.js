import React from "react";
import { useState } from "react";

import "./Tabs.css";
import "../creator/QRCreator";
import "../scanner/QRScanner";
import QRCreator from "../creator/QRCreator";
import QRScanner from "../scanner/QRScanner";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <div className="tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Criar QR Code
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Scanear QR Code
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? <QRCreator /> : <QRScanner />}
      </div>
    </div>
  );
}
