import React, { useState } from "react";
import "./Event_panel.css";

function Event_panel() {
  const [activeTab, setActiveTab] = useState("Система сбора");
  
  return (
    <div className="eventpanel">
      <h className="NewEvent">Новое мероприятие</h>
      <div className="bar">
        <p
          className={`barlist ${activeTab === "Система сбора" ? "active" : ""}`}
          onClick={() => setActiveTab("Система сбора")}
        >
          Система сбора
        </p>
        <p
          className={`barlist ${activeTab === "Скважина" ? "active" : ""}`}
          onClick={() => setActiveTab("Скважина")}
        >
          Скважина
        </p>
        <p
          className={`barlist ${
            activeTab === "Дополнительные алгоритмы" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Дополнительные алгоритмы")}
        >
          Дополнительные алгоритмы
        </p>
      </div>
    </div>
  );
}

export default Event_panel;
