import React, { Component } from "react";
import { ResponsiveSunburst } from "@nivo/sunburst";
import { data } from "./data.js";
class Graph extends Component {
  onSelect(event) {
    console.log(event);
  }
  render() {
    let pie = {
      title: "home-page",
      color: 1,
      children: [
        {
          title: "how-to-use-this-website",
          color: 2
        },
        {
          title: "computer-science",
          children: [
            {
              title: "cs subjects",
              children: [
                {
                  title: "intro-to-programming",
                  size: "1000",
                  color: "#5287AC"
                },

                { title: "dsa", size: "1000", color: "#5287AC" },

                { title: "oop", size: "1000", color: "#5287AC" },

                { title: "dbms", size: "1000", color: "#5287AC" },

                { title: "os", size: "1000", color: "#5287AC" }
              ]
            },
            {
              title: "cs subjects problems",
              children: [
                { title: "intro-to-programming-practice", size: "1000" },

                { title: "intro-to-algorithms-practice", size: "1000" },

                { title: "dsa-practice", size: "1000" },

                { title: "oop-practice", size: "1000" },

                { title: "dbms-practice", size: "1000" },

                { title: "os-practice", size: "1000" }
              ]
            },
            {
              title: "cs-intern-and-placement",
              children: [
                { title: "cs-intern-and-placement-topics", size: "1000" },

                { title: "internship-and-job-opportunities", size: "1000" }
              ]
            }
          ]
        },
        {
          title: "eee",
          children: [
            {
              title: "eee subjects",
              children: [
                { title: "intro-to-electrical-sciences", size: "1000" },

                { title: "solid-state-devices", size: "1000" },

                { title: "vlsi-design", size: "1000" },

                { title: "digital-design", size: "1000" },

                { title: "microprocessors", size: "1000" },

                { title: "computer-architechture", size: "1000" },

                { title: "analog-electronics", size: "1000" }
              ]
            },
            {
              title: "cs subjects problems",
              children: [
                {
                  title: "intro-to-electrical-sciences-practice",
                  size: "1000"
                },

                { title: "electronic-devices-practice", size: "1000" },

                { title: "microp-comparch-practice", size: "1000" }
              ]
            },
            {
              title: "eee-intern-and-placement",
              children: [
                { title: "eee-intern-and-placement-topics", size: "1000" },

                { title: "internship-and-job-opportunities", size: "1000" }
              ]
            }
          ]
        }
      ]
    };
    return (
      <div style={{height:"700px"}}>
        <ResponsiveSunburst
          data={data}
          margin={{
            top: 40,
            right: 20,
            bottom: 20,
            left: 20
          }}
          identity="name"
          value="loc"
          cornerRadius={2}
          borderWidth={1}
          borderColor="white"
          colors="nivo"
          colorBy="id"
          childColor="inherit"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          isInteractive={true}
        />
      </div>
    );
  }
}

export default Graph;
