import React from "react";
import "./style.scss";
import { ControlsButton } from "../../shared";
import { LeftArrow } from "../../shared/assets";

interface ControlsProps {
  currentIndex: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
}

const Controls = ({ currentIndex, total, onNext, onPrev }: ControlsProps) => {
  return (
    <div className="controls">
      <p>
        {currentIndex}/{total}
      </p>
      <div className="controls__buttons">
        <ControlsButton disabled={currentIndex === 1} onClick={onPrev}>&lt;</ControlsButton>
        <ControlsButton disabled={currentIndex === total} onClick={onPrev}>&gt;</ControlsButton>
      </div>
    </div>
  );
};

export default Controls;
