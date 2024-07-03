import React, { createContext, useCallback, useState } from "react";
import RadialDateSelect from "./widgets/radial-date-select/RadialDateSelect";
import "./style.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Dates } from "./features";
import Controls from "./features/controls/Controls";
import Slider from "./widgets/slider/Slider";
import { timePeriodData } from "./entities/time-period/constants";
import {
  getSlidesDataByIndex,
  getTimePeriodByIndex,
} from "./entities/time-period/tools";

const App = () => {
  return (
    <div className="container">
      <div className="select__wrapper">
        <h1 className="title">
          Исторические
          <br />
          даты
        </h1>
        <Dates />
        <RadialDateSelect />
        <Controls />
      </div>
      <Slider />
    </div>
  );
};

export default App;
