/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Block from "./Block";


function Breaking() {
  return (
    <>
    <div className="Breaking-container">
        <Block label={'Стартовая частота, Гц'}/>
        <Block label={'Время торможения, мин'}/>
        <Block label={'Время работы на мин. частоте, час'}/>
        <Block label={'Конечная частота, Гц'}/>
        <Block label={'Интенсивность снижения частоты, Гц/мин'}/>
        <Block label={'Время торможения до полного останова, мин'}/>
    </div>
    </>
  );
}

export default Breaking;