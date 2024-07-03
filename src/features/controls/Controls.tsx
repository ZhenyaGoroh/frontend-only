import React from "react";
import "./style.scss";
import { ControlsButton } from "../../shared";
import { LeftArrow } from "../../shared/assets";
import { timePeriodData } from "../../entities/time-period/constants";
import { useAtom } from "jotai";
import { appatom } from "../../atom";

const Controls = () => {
  const total = timePeriodData.length
  const [activeIndex, setActiveIndex] = useAtom(appatom);

  const onPrev = () => {
    console.log(activeIndex);
    
    setActiveIndex((prev) => prev - 1);
  };

  const onNext = () => {
    console.log(activeIndex);
    setActiveIndex((prev) => prev + 1);
  };

  return (
    <div className="controls">
      <p>
        {activeIndex}/{total}
      </p>
      <div className="controls__buttons">
        <ControlsButton disabled={activeIndex === 1} onClick={onPrev}>
          &lt;
        </ControlsButton>
        <ControlsButton disabled={activeIndex === total} onClick={onNext}>
          &gt;
        </ControlsButton>
      </div>
    </div>
  );
};

export default Controls;
