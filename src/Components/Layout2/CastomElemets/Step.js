import React, { useState } from "react";
import "./Step.css";
import Delete from "../../../img/Trash.svg";
import Add from "../../../img/Add_step.svg";
import Calendar from "../../../img/Calendar.svg";
import Clock from "../../../img/Clock.svg";

function Step() {
  const [steps, setSteps] = useState([{ id: 1 }]);

  const addStep = () => {
    setSteps([...steps, { id: steps.length + 1 }]);
  };

  const removeStep = (id) => {
    setSteps(steps.filter((step) => step.id !== id));
  };

  return (
    <div className="step-container">
      {steps.map((step, index) => (
        <div key={step.id} className="step">
          <div className="step-inputs">

            <div className="stepData">
              <div className="label22">
                Дата шага
                <p className="time-text2">28.04.2023</p>
              </div>
              <img className="Calendar" src={Calendar} alt="" />
            </div>

            <div className="textStep">
              <div className="stepTitle">Длительность шага, чч:мм</div>
              <img className="Calendar" src={Clock} alt="" />
            </div>

            <div className="stepTime">
              <div className="label22">
              Время шага
                <p className="time-text2">00:00</p>
              </div>
              <img className="Calendar" src={Clock} alt="" />
            </div>

            <div className="textStep2">
            <div className="stepTitle">Дебит жидкости, м3/сут</div>
            </div>
          </div>
          <img
            className="remove-step"
            src={Delete}
            alt="Delete"
            onClick={() => removeStep(step.id)}
          />
        </div>
      ))}
      <img className="add-step" src={Add} alt="Add" onClick={addStep} />
    </div>
  );
}

export default Step;
