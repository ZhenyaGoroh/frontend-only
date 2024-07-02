import React from "react";
import "./style.scss"

interface DatesProps {
  firstDate: number;
  secondDate: number;
}

const Dates = ({ firstDate, secondDate }: DatesProps) => {
  return <div className="dates">
    <h2 className="dates__item dates__item_purple">{firstDate}</h2>
    <h2 className="dates__item dates__item_pink">{secondDate}</h2>
  </div>;
};

export default Dates;
