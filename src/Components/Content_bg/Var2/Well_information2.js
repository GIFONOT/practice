import React from "react";
import "./Well_information2.css";
import CastomSelectVar2 from "../CastomSelect/CastomSelectVar2.js";
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
    <div className="well-informationVar2">
      <CastomSelectVar2 label={"Вид скважины"} options={options1} />
      <CastomSelectVar2 label={"Скважина"} options={options2} />
      <CastomSelectVar2 label={"Мероприятие"} options={options3} />

      <CastomSelectVar2
        label={"УКПГ, Шлейф или участок ГСС"}
        options={options4}
        width={"378px"}
      />
      
      <div className="CastomSelectVisVar2">
        <div className="labelVar2">Задействованные скважины</div>
      </div>

      <div className="settingVar2">
        <CastomSelectVar2 label={"Вид ГТМ"} options={options5} width={"220px"} />
        <div className="SettingButVar2">
        <CastomSelectVar2
          label={"Тип моделирования"}
          options={options6}
          width={"220px"}
        />
        <img src={Setting} alt="Setting" className="SettingButVar2" />
        </div>
        
      </div>
    </div>
  );
}

export default Well_information;