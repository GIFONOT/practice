/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Header from "../Header.js";
import Event_panel from "../Event_panel.js";
import Well_information2 from "./Well_information2.js";
import Table2 from "./Table2.js";

function Content2({ root, Name, Role }) {
  return (
    <>
      <Header Name={"Имя Пользователя"} Role={"Роль в системе"} />
      <Event_panel />
      <Well_information2 />
      <Table2 />
    </>
  );
}

export default Content2;