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
      <div style={{ height: "1200px",margin:"2.5%" }}>
        <Tree
          data={data}
          height={1200}
          width={1450}
          animated={true}
          svgProps={{
            className: "custom"
          }}
          textProps={{
            x:"5"
          }}
        >
        </Tree>
      </div>
    );
  }
}

export default Graph;
