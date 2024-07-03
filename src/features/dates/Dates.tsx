import React from "react";
import "./style.scss"
import { useAtom } from "jotai";
import { appatom } from "../../atom";
import { getTimePeriodByIndex } from "../../entities/time-period/tools";
import { timePeriodData } from "../../entities/time-period/constants";

const Dates = () => {
  const [activeIndex] = useAtom(appatom);
  
  return <div className="dates">
    <h2 className="dates__item dates__item_purple">{getTimePeriodByIndex(activeIndex, timePeriodData)[0]}</h2>
    <h2 className="dates__item dates__item_pink">{getTimePeriodByIndex(activeIndex, timePeriodData)[1]}</h2>
  </div>;
};

export default Dates;
