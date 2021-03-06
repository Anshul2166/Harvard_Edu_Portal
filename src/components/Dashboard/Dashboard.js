import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "../../shared/Slider/Slider";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Typography variant="h4" component="h1" className="heading-dashboard center">
          Explore fields of courses
        </Typography>
        <Slider cardType="specialization" duration="600"/>
        <Typography variant="h4" component="h1" className="heading-dashboard center">
          Earn your degrees and more
        </Typography>
        <Slider cardType="degree"  duration="400"/>
        <Typography variant="h4" component="h1" className="heading-dashboard center">
          Explore variety of courses
        </Typography>
        <Slider cardType="course"  duration="600"/>
      </div>
    );
  }
}

export default Dashboard;
