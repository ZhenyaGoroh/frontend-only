import React, { useRef, useEffect, useState } from "react";
import "./style.scss";
import { SelectItem } from "../../features";
import { selectItemsData } from "../../entities";

const RadialDateSelector = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const radius = 266;

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (circleRef.current) {
      const rect = circleRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setCenter({ x: centerX, y: centerY });
    }
  }, []);

  const items = Array.from({ length: 6 }, (_, index) => {
    // Угол с учетом текущего вращения
    const angle = (((index * 360) / 6) * Math.PI) / 180;
    const x = center.x + radius * Math.cos(angle);
    const y = center.y + radius * Math.sin(angle);
    return { x, y, angle };
  });

  return (
    <div className="selector">
      <div
        style={{ transform: `rotate(${rotation}deg)` }}
        className="selector__circle"
        ref={circleRef}
      >
        {items.map((item, index) => (
          <SelectItem
            index={index + 1}
            label={selectItemsData[index].label}
            cords={item}
            rotationAngle={rotation}
            key={index}
            onClick={() => {
              setRotation(360 - (360 / 6) * (index + 1));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RadialDateSelector;
