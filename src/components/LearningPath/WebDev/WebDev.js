import React, { Component } from "react";
import Header from "../../Common/Header/Header";
import data from "./treeData";
import Tree from "react-d3-tree";
const svgSquare = {
  shape: "rect",
  shapeProps: {
    width: 20,
    height: 20,
    x: -10,
    y: -10
  }
};

class WebDev extends Component {
  render() {
    return (
      <div className="WebDev">
        <Header />
        <div id="tree-simple" style={{ width: "100%", height: "100vh" }}>
          <Tree data={data} nodeSvgShape={svgSquare} />
        </div>
      </div>
    );
  }
}
export default WebDev;
