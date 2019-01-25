import React from "react";
// import { hierarchy } from "d3-hierarchy";
import data from "./data";
import Sunburst from "sunburst-chart";
import * as d3 from "d3";
// import Sunburst from "./Sunburst";

// const root = hierarchy(data).sum(d => d.size);

class SunburstGraph extends React.Component {
  onSelect(event) {
    console.log(event);
  }

  componentDidMount = () => {
    const myChart = Sunburst();
    const color = d3.scaleOrdinal(d3.schemePaired);
    myChart
      .data(data)
      .color((d, parent) => color(parent ? parent.data.name : null))(
      document.querySelector(".SunburstGraph")
    );
  };

  render() {
    return <div className="SunburstGraph" />;
  }
}

export default SunburstGraph;
