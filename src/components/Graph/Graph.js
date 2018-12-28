import React, { Component } from "react";
import Tree from "react-tree-graph";
import { data } from "./data.js";
import "react-tree-graph/dist/style.css";
import "./Graph.css";

class Graph extends Component {
  constructor(props){
    super(props);
    this.clickEvent=this.clickEvent.bind(this);
  }
  clickEvent(node){
    console.log(node);
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
          gProps={{ className: 'node',onClick: node =>this.clickEvent(node) }}
          svgProps={{
            className: "custom",
          }}
          nodeOffset={15}
          nodeRadius={20}
          textProps={{
            x: "5"
          }}
          keyProp="id"
        />
      </div>
    );
  }
}

export default Graph;
