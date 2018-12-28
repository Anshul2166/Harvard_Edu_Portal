import React, { Component } from "react";
import Tree from "react-tree-graph";
import { data } from "./data.js";
import "react-tree-graph/dist/style.css";
import "./Graph.css";

class Graph extends Component {
  onSelect(event) {
    console.log(event);
  }
  render() {
    return (
      <div style={{ height: "1200px", margin: "2%", padding: "3%" }}>
        <h1 className="center-text">Furture course path tree</h1>
        <Tree
          data={data}
          height={1700}
          width={1550}
          duration={1000}
          steps={40}
          animated={true}
          gProps={{ className: 'node',onClick: node =>console.log(node) }}
          svgProps={{
            className: "custom",
          }}
          nodeOffset={15}
          nodeRadius={20}
          textProps={{
            x: "5",
          }}
        />
      </div>
    );
  }
}

export default Graph;
