import React from "react";
// import { hierarchy } from "d3-hierarchy";
import data from "./data";
//We are importing this so that the required dependices for edited version
//of sunburst-chart get installed
import CeremonialSunburst from "sunburst-chart";

import Sunburst from "./Sunburst";
import * as d3 from "d3";

class SunburstGraph extends React.Component {
  onSelect(event) {
    console.log(event);
  }

  componentDidMount = () => {
    const myChart = Sunburst();
    const color = d3.scaleOrdinal(d3.schemePaired);
    myChart
      .data(data)
      .tooltipContent(text => text.name)
      .color((d, parent) => d.color)(document.querySelector(".SunburstGraph"));
  };

  render() {
    return <div className="SunburstGraph" />;
  }
}

export default SunburstGraph;
