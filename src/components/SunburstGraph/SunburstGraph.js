import React from "react";
// import { hierarchy } from "d3-hierarchy";
import data from "./data";
//We are importing this so that the required dependices for edited version
//of sunburst-chart get installed
import CeremonialSunburst from "sunburst-chart";

import Sunburst from "./Sunburst";
import * as d3 from "d3";
import { withRouter } from "react-router-dom";

class SunburstGraph extends React.Component {
  onSelect(event) {
    console.log(event);
  }

  componentDidMount = () => {
    const myChart = Sunburst();
    const color = d3.scaleOrdinal(d3.schemePaired);
    myChart
      .data(data)
      .tooltipContent(text => text.hover || text.name)
      .color((d, parent) => d.color)(document.querySelector(".SunburstGraph"))
      .onNodeClick((d, parent) => {
        if (!d.children) {
          return this.props.history.push("/course_link");
        }
        myChart.focusOnNode(d);
      });
  };

  render() {
    return <div className="SunburstGraph" />;
  }
}

export default withRouter(SunburstGraph);
