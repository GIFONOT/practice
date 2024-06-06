/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Header from "../Content_bg/Header.js";
import Deploy from "./CastomElemets/Deploy.js";
import Breaking from "./CastomElemets/Breaking.js";
import Step from "./CastomElemets/Step.js";
import "./Layout.css";

function Content3({ root, Name, Role }) {
  return (
    <>
      <Header Name={"Имя Пользователя"} Role={"Роль в системе"} />
      <div className="Deploy1">
        <Deploy label={"Разгон"} />
      </div>
      <div className="Deploy2">
        <Deploy label={"Торможение"}>
          <Breaking />
        </Deploy>
      </div>
      <div className="PGI-table">
        <div className="PGI">
          <Deploy label={"ПГИ"}>
            <div className="step">
              <Step />
            </div>
          </Deploy>
        </div>
      </div>
    </>
  );
}

export default Content3;
