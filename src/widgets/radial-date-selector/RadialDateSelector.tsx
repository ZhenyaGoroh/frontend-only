import React, { useState } from "react";
import "./style.scss";
const RadialDateSelector = () => {
  return (
    <div
      style={{
        position: "relative",
        border: "1px solid black",
        width: "500px",
        height: "500px",
        rotate: "30deg",
      }}
    >
      <h1 className="red" style={{ position: "absolute", rotate: "-30deg" }}>
        Radial Date Selector
      </h1>
    </div>
  );
};

export default RadialDateSelector;
