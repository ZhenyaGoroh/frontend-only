import React from "react";
import RadialDateSelect from "./widgets/radial-date-select/RadialDateSelect";
import "./style.scss";
import { Dates } from "./features";
import Controls from "./features/controls/Controls";

const App = () => {
  return (
    <div className="container">
      <div className="select__wrapper">
        <h1 className="title">
          Исторические
          <br />
          даты
        </h1>
        <Dates firstDate={2003} secondDate={2005} />
        <RadialDateSelect />
        <Controls currentIndex={1} total={2} onNext={() => {}} onPrev={() => {}} />
      </div>
    </div>
  );
};

export default App;
