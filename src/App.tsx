import React from "react";
import RadialDateSelect from "./widgets/radial-date-select/RadialDateSelect";
import "./style.scss";
import { Dates } from "./features";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">
        Исторические
        <br />
        даты
      </h1>
      {/* <Dates firstDate={2003} secondDate={2005} /> */}
      <RadialDateSelect />
    </div>
  );
};

export default App;
