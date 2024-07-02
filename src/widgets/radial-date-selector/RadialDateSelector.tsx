import React, { useState } from "react";

const CircleLayout = () => {
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
      <h1 style={{ position: "absolute", rotate: "-30deg" }}>
        Radial Date Selector
      </h1>
    </div>
  );
};

export default CircleLayout;
