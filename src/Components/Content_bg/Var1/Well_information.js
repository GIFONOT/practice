import React from "react";
import "./Well_information.css";
import CastomSelect from "../CastomSelect/CastomSelect.js";
import Setting from "../../../img/settings.svg";

function Well_information() {
  const options1 = [
    { value: "option1", label: "Добывающая газовая 1" },
    { value: "option2", label: "Добывающая газовая 2" },
    { value: "option3", label: "Добывающая газовая 3" },
  ];
  const options2 = [
    { value: "option1", label: "14052" },
    { value: "option2", label: "34545" },
    { value: "option3", label: "65445" },
  ];
  const options3 = [{ value: "option1", label: "ГДИС - КВД" }];
  const options4 = [];
  const options5 = [{ value: "option1", label: "Исследование" }];
  const options6 = [{ value: "option1", label: "Остановка-запуск" }];
  return (
    <div className="well-information">
      <CastomSelect label={"Вид скважины"} options={options1} />
      <CastomSelect label={"Скважина"} options={options2} />
      <CastomSelect label={"Мероприятие"} options={options3} />

      <CastomSelect
        label={"УКПГ, Шлейф или участок ГСС"}
        options={options4}
        width={"378px"}
      />
      <div className="CastomSelectVis">
        <div className="label">Задействованные скважины</div>
      </div>
      <div className="setting">
        <CastomSelect label={"Вид ГТМ"} options={options5} width={"220px"} />
        <CastomSelect
          label={"Тип моделирования"}
          options={options6}
          width={"220px"}
        />
        <img src={Setting} alt="Setting" className="SettingBut" />
      </div>
    </div>
  );
}

export default Well_information;
