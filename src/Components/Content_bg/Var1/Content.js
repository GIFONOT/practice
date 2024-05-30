/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Header from "../Header.js";
import Event_panel from "../Event_panel.js";
import Well_information from "./Well_information.js";
import Table from "./Table.js";

function Content({ root, Name, Role }) {
  return (
    <>
      <Header Name={"Имя Пользователя"} Role={"Роль в системе"} />
      <Event_panel />
      <Well_information />
      <Table />
    </>
  );
}

export default Content;
