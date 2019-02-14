import React, { Component } from "react";
import SpecializationCard from "../Common/SpecializationCard";
import DegreeCard from "../Common/DegreeCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CourseCard from "../Common/CourseCard";
import Slider from "../../shared/Slider/Slider";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Typography variant="h4" component="h1" className="heading center">
          Explore fields of courses
        </Typography>
        <Slider cardType="specialization" duration="600"/>
        <Typography variant="h4" component="h1" className="heading center">
          Earn your degrees and more
        </Typography>
        <Slider cardType="degree"  duration="400"/>
        <Typography variant="h4" component="h1" className="heading center">
          Explore variety of courses
        </Typography>
        <Slider cardType="career"  duration="600"/>
      </div>
    );
  }
}

export default Dashboard;
