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
        <Typography variant="h5" component="h2" className="heading">
          Explore fields of courses
        </Typography>
        <Slider cardType="specialization" duration="600"/>
        <Typography variant="h5" component="h2" className="heading">
          Earn your degrees and more
        </Typography>
        <Slider cardType="degree"  duration="400"/>
        <Typography variant="h5" component="h2" className="heading">
          Explore variety of courses
        </Typography>
        <Slider cardType="career"  duration="600"/>
      </div>
    );
  }
}

export default Dashboard;
