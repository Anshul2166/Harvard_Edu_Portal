import { Graph } from "react-d3-graph";
import React, { Component } from "react";

const decorateGraphNodesWithInitialPositioning = nodes =>
  nodes.map(n =>
    Object.assign({}, n, {
      x: n.x || Math.floor(Math.random() * 1100),
      y: n.y || Math.floor(Math.random() * 1100)
    })
  );
let nodes = [
  { id: "home-page" },
  //home page contents
  { id: "how-to-use-this-website" },
  { id: "computer-science" },
  { id: "electrical-science" },
  { id: "mechanical" },
  { id: "chemical" },
  { id: "finance" },
  { id: "general-information-on-what-do-after-engineering" }, //home page content ends
  // 1 cs subjects start
  { id: "intro-to-algorithms" },
  { id: "intro-to-algorithms" },
  { id: "dsa" },
  { id: "oop" },
  { id: "dbms" },
  { id: "os" }, // cs sujects end
  // cs problem practice start
  { id: "intro-to-programming-practice" },
  { id: "oop-problem-practice" },
  { id: "dsa-problem-practice" },
  { id: "dbms-problem-practice" },
  { id: "os-problem-practice" }, //cs problem bank ends
  //not including discussion forms and starting placement and internship section
  { id: "cs-intern-and-placement-preparation-topics" },
  { id: "internship-and-job-opportunities" }, //entire computer science section completed
  // 2 eee subjects start
  { id: "intro-to-electrical-sciences" },
  { id: "solid-state-devices" },
  { id: "vlsi-design" },
  { id: "digital-design" },
  { id: "microprocessors" },
  { id: "computer-architechture" },
  { id: "analog-electronics" }, // eee sujects end
  // eee problem practice start
  { id: "intro-to-programming-practice" },
  { id: "electronic-devices-practice" },
  { id: "microp-comparch-practice" }, //eee problem bank ends
  //not including discussion forms and starting placement and internship section
  { id: "eee-intern-and-placement-preparation-topics" },
  { id: "internship-and-job-opportunities" }
];
let data = {
  nodes: decorateGraphNodesWithInitialPositioning(nodes),
  links: [
    { source: "home-page", target: "how-to-use-this-website" },
    { source: "home-page", target: "computer-science" },
    { source: "home-page", target: "electrical-science" },
    { source: "home-page", target: "mechanical" },
    { source: "home-page", target: "chemical" },
    { source: "home-page", target: "finance" },
    {
      source: "home-page",
      target: "general-information-on-what-do-after-engineering"
    },
    { source: "computer-science", target: "intro-to-algorithms" },
    { source: "computer-science", target: "intro-to-algorithms" },
    { source: "computer-science", target: "dsa" },
    { source: "computer-science", target: "oop" },
    { source: "computer-science", target: "dbms" },
    { source: "computer-science", target: "os" },
    {
      source: "computer-science",
      target: "intro-to-programming-practice"
    },
    { source: "computer-science", target: "oop-problem-practice" },
    { source: "computer-science", target: "dsa-problem-practice" },
    { source: "computer-science", target: "dbms-problem-practice" },
    { source: "computer-science", target: "os-problem-practice" },
    {
      source: "computer-science",
      target: "cs-intern-and-placement-preparation-topics"
    },
    {
      source: "computer-science",
      target: "internship-and-job-opportunities"
    },
    { source: "electrical-science", target: "intro-to-electrical-sciences" },
    { source: "electrical-science", target: "solid-state-devices" },
    { source: "electrical-science", target: "vlsi-design" },
    { source: "electrical-science", target: "digital-design" },
    { source: "electrical-science", target: "microprocessors" },
    { source: "electrical-science", target: "computer-architechture" },
    { source: "electrical-science", target: "analog-electronics" },
    { source: "electrical-science", target: "intro-to-programming-practice" },
    { source: "electrical-science", target: "electronic-devices-practice" },
    { source: "electrical-science", target: "microp-comparch-practice" },
    {
      source: "electrical-science",
      target: "eee-intern-and-placement-preparation-topics"
    },
    { source: "electrical-science", target: "internship-and-job-opportunities" }
  ]
};

class CourseGraph extends Component {
  render() {
    const myConfig = {
      nodeHighlightBehavior: true,
      node: {
        color: "lightgreen",
        size: "1000",
        highlightStrokeColor: "blue",
        fontSize: "50px",
        fontWeight: "1000"
      },
      d3: {
        alphaTarget: 0.1,
        linkLength: 600,
        gravity: -2000
      },
      link: {
        highlightColor: "lightblue",
        strokeWidth: 5
      },
      directed: true,
      automaticRearrangeAfterDropNode: false,
      collapsible: true,
      height: window.innerHeight,
      width: window.innerWidth,
      staticGraph: true
    };

    return (
      <div className="graph">
        <Graph
          id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
          data={data}
          config={myConfig}
        />
      </div>
    );
  }
}

export default CourseGraph;
