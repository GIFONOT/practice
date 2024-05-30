/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./Table2.css";
import Data_time2 from "../CastomBlock/Data_time2.js";
import Time2 from "../CastomBlock/Time2.js";
import Block2 from "../CastomBlock/Block2.js";
import CastomSelect2 from "../CastomSelect/CastomSelectVar2.js";
import Comments2 from "../CastomBlock/Coments2.js";

function Table() {
  const options = [{ value: "option1", label: "Нет" }];
  return (
    <>
      <div className="tableVar2">
        <div className="Date_timeVar2">
          <Data_time2
            lable={"Дата начала"}
            width={"218px"}
            borderRadius={"8px"}
          />
          <Time2 label={"Время начала"} width={"218px"} />
          <Data_time2
            lable={"Дата окончания"}
            width={"218px"}
            borderRadius={"8px"}
          />
          <Time2 label={"Время окончания"} width={"218px"} />
        </div>
        <div className="droptableVar2">
          <Block2 label={"Дней на подготовку"} width={"218px"} />
          <Block2 label={"Часов"} width={"218px"}/>
          <Block2 label={"Минут"} width={"218px"}/>
        </div>
        <div className="block1Var2">
          <Block2 label={"Кпрод, (м3/сут..."} width={"218px"} />
          <Block2 label={"Множ Кпрод..."} width={"218px"}/>
          <Block2 label={"D штуцера, мм"} width={"218px"} />
          <Block2 label={"Частота насос..."} width={"218px"} />
        </div>
        <div className="block2Var2">
          <Block2 label={"Обводнённост..."} width={"218px"} />
          <Block2 label={"_P ру, бар"} width={"218px"} />
          <Block2 label={"КФГ, м3/тыс.м3"} width={"218px"} />
          <Block2 label={"Частота насос..."} width={"218px"} />
        </div>
      </div>
      <div className="block3Var2">
        <CastomSelect2
          label={"Исследование по общему шлейфу"}
          options={options}
        />
        <div className="CastomSelectVis2Var2">
          <div className="labelVar2">Ограничение по давлению, бар</div>
        </div>
      </div>
      <div className="CommentsVar2">
        <Comments2 />
      </div>
    </>
  );
}
export default Table;
