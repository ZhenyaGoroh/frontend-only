import React from "react";
import RadialDateSelect from "./widgets/radial-date-select/RadialDateSelect";
import "./style.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Dates } from "./features";
import Controls from "./features/controls/Controls";
import Slider from "./widgets/slider/Slider";

const App = () => {
  return (
    <div className="container">
      <div className="select__wrapper">
        <h1 className="title">
          Исторические
          <br />
          даты
        </h1>
        <Dates firstDate={2003} secondDate={2005} />
        <RadialDateSelect />
        <Controls
          currentIndex={1}
          total={2}
          onNext={() => {}}
          onPrev={() => {}}
        />
      </div>
      <Slider slidesData={[{content: "1", title: "1"}, {content: "2", title: "2"}, {content: "3", title: "3"}, {content: "1", title: "1"}, {content: "1", title: "1"}]}/>
    </div>
  );
};

export default App;
