import React from "react";
import "./style.scss";

interface ControlsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
    children: React.ReactNode;
}

const ControlsButton = ({
  onClick,
  children,
  ...rest
}: ControlsButtonProps) => {
  return <button {...rest} onClick={onClick} className="controls__button">{children}</button>;
};

export default ControlsButton;
