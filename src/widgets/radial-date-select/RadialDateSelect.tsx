import React, { useRef, useEffect, useState, useMemo } from "react";
import "./style.scss";
import { Dates, SelectItem } from "../../features";
import { selectItemsData } from "../../entities";
import useCalculateCenter from "./hooks/useCalculateCenter";
import useRadialDateSelect from "./hooks/useRadialDateSelect";
import { RADIUS } from "../constants";
import { useAtom } from "jotai";
import { appatom } from "../../atom";

const RadialDateSelect = React.memo(
  ({ onClick }: { onClick?: (index: number) => void }) => {
    const { center, ref: circleRef } = useCalculateCenter();

    const [index, setActiveIndex] = useAtom(appatom);

    console.log(index);
    

    const { rotation, itemsData, activeIndex } = useRadialDateSelect({
      center,
      radius: RADIUS,
      selectItemsData,
    });

    return (
      <div className="selector">
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
  },
);

const MemoizedRadialDateSelect = ({ onClick }: { onClick?: (index: number) => void }) => {
  const component = useMemo(
    () => <RadialDateSelect onClick={onClick} />,
    [],
  );

  return component;
};

export default MemoizedRadialDateSelect;
