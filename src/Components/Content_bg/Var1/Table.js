/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./Table.css";
import Data_time from "../CastomBlock/Data_time.js";
import Time from "../CastomBlock/Time.js";
import Block from "../CastomBlock/Block.js";
import CastomSelect from "../CastomSelect/CastomSelect.js";
import Comments from "../CastomBlock/Coments.js";

function Table() {
  const options = [{ value: "option1", label: "Нет" }];
  return (
    <>
      <div className="table">
        <div className="Date_time">
          <Data_time lable={"Дата начала"} />
          <Time label={"Время начала"} />
          <Data_time lable={"Дата окончания"} width={"212.31px"} />
          <Time label={"Время окончания"} />
        </div>
        <div className="droptable">
          <Block label={"Дней на подготовку"} />
          <Block label={"Часов"} />
          <Block label={"Минут"} />
        </div>
        <div className="block1">
          <Block label={"Кпрод, (м3/сут..."} width={"211.35px"} />
          <Block label={"Множ Кпрод..."} width={"211.35px"} />
          <Block label={"D штуцера, мм"} width={"211.35px"} />
          <Block label={"Частота насос..."} width={"211.35px"} />
        </div>
        <div className="block2">
          <Block label={"Обводнённост..."} width={"211.35px"} />
          <Block label={"_P ру, бар"} width={"211.35px"} />
          <Block label={"КФГ, м3/тыс.м3"} width={"211.35px"} />
          <Block label={"Частота насос..."} width={"211.35px"} />
        </div>
      </div>
      <div className="block3">
        <CastomSelect
          label={"Исследование по общему шлейфу"}
          options={options}
        />
        <div className="CastomSelectVis2">
          <div className="label">Ограничение по давлению, бар</div>
        </div>
      </div>
      <div className="Comments">
        <Comments />
      </div>
    </>
  );
}
export default Table;
