import React, { useRef, useEffect, useState } from "react";
import "./style.scss";
import { Dates, SelectItem } from "../../features";
import { selectItemsData } from "../../entities";
import useCalculateCenter from "./hooks/useCalculateCenter";
import useRadialDateSelect from "./hooks/useRadialDateSelect";

const RadialDateSelect = () => {
  const radius = 266;

  const { center, ref: circleRef } = useCalculateCenter();

  const { rotation, itemsData, activeIndex } = useRadialDateSelect({
    center,
    radius,
    selectItemsData,
  });

  console.log(center);
  

  return (
    <div className="selector">
      <Dates firstDate={2003} secondDate={2005} />
      <div
        style={{ transform: `rotate(${rotation}deg)` }}
        className="selector__circle"
        ref={circleRef}
      >
        {itemsData.map((item, index) => (
          <SelectItem
            index={item.index}
            label={item.label}
            cords={item.cords}
            rotationAngle={rotation}
            key={index}
            isActive={item.index === activeIndex}
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RadialDateSelect;
