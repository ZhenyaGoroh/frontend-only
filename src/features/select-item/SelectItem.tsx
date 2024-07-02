import React from "react";
import "./style.scss";

export interface SelectItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  rotationAngle: number;
  cords: { x: number; y: number };
  onClick: () => void;
  index: number;
  label: string;
}

const SelectItem = ({
  rotationAngle,
  cords,
  onClick,
  isActive = false,
  index,
  label,
  ...rest
}: SelectItemProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        left: cords.x,
        top: cords.y,
        transform: "translate(-50%, -50%) rotate(-" + rotationAngle + "deg)",
      }}
      data-active={isHovered}
      className="item"
      {...rest}
    >
      {isHovered && index}
      {isHovered && <div className="item__label">{label}</div>}
    </div>
  );
};

export default SelectItem;
