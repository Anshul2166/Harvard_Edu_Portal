import React, { Component } from "react";
import Tree from "react-tree-graph";
import { data } from "./data.js";
import "react-tree-graph/dist/style.css";
import {courses} from "./courses";
import {Redirect} from "react-router-dom";
import "./Graph.css";
import {withRouter} from 'react-router-dom';

class Graph extends Component {
  constructor(props){
    super(props);
    this.clickEvent=this.clickEvent.bind(this);
  }
  clickEvent(node){
    console.log(node);
    let index=courses[node];
    if(index===undefined){
       console.log("Not a course");
    }
    else{
      console.log("course");
      this.props.history.push({pathname:'/course_info',state: { index: index }});
    }
  }
  render() {
    return (
      <div style={{ height: "1200px", margin: "2%", padding: "3%" }}>
        <h1 className="center-text">Future course path tree</h1>
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

export default withRouter(Graph);
