import { useEffect, useState } from "react";
import { SelectItemData } from "../../../entities/select-items/constants";
import { SelectItemProps } from "../../../features/select-item/SelectItem";
import { useAtom } from "jotai";
import { appatom } from "../../../atom";

interface UseRadialDateSelect {
  selectItemsData: SelectItemData[];
  center: { x: number; y: number };
  radius: number;
  onClick?: (index: number) => void;
}

export default function useRadialDateSelect({
  selectItemsData,
  center,
  radius,
  onClick
}: UseRadialDateSelect) {
    
  const itemsAmount = selectItemsData.length;

  const [activeIndex, setActiveIndex] = useAtom(appatom);
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
          onClick?.(index + 1);
          setActiveIndex(index + 1);
          setRotation(360 - (360 / itemsAmount) * index); //TODO: fix rotation on first click
        },
      })),
    );
  }, [center]);

  return { rotation, itemsData, activeIndex, setActiveIndex };
}
