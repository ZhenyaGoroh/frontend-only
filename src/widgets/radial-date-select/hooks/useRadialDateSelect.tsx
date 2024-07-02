import { useEffect, useState } from "react";
import { SelectItemData } from "../../../entities/select-items/constants";
import { SelectItemProps } from "../../../features/select-item/SelectItem";

interface UseRadialDateSelect {
  selectItemsData: SelectItemData[];
  center: { x: number; y: number };
  radius: number;
}

export default function useRadialDateSelect({
  selectItemsData,
  center,
  radius,
}: UseRadialDateSelect) {

    console.log(radius);
    
  const itemsAmount = selectItemsData.length;

  const [activeIndex, setActiveIndex] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [itemsData, setItemsData] = useState<SelectItemProps[]>([]);

  useEffect(() => {
    const items = Array.from({ length: itemsAmount }, (_, index) => {
      const angle = (((index * 360) / itemsAmount) * Math.PI) / 180;
      const x = radius + radius * Math.cos(angle);
      const y = radius + radius * Math.sin(angle);
      return { x, y, angle };
    });
    setItemsData(
      selectItemsData.map((item, index) => ({
        ...item,
        cords: items[index],
        isActive: index + 1 === activeIndex,
        rotationAngle: rotation,
        onClick: () => {
          setActiveIndex(index + 1);
          setRotation(360 - (360 / itemsAmount) * index); //TODO: fix rotation on first click
        },
      })),
    );
  }, [center]);

  return { rotation, itemsData, activeIndex, setActiveIndex };
}
