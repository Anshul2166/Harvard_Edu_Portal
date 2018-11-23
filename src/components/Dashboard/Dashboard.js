import React, { Component } from "react";
import SpecializationCard from "../Common/SpecializationCard";
import DegreeCard from "../Common/DegreeCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./Dashboard.css";
import CourseCard from "../Common/CourseCard";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Typography variant="h5" component="h2" className="heading">
          Explore fields of courses
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <SpecializationCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <SpecializationCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <SpecializationCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <SpecializationCard />
          </Grid>
        </Grid>
        <Typography variant="h5" component="h2" className="heading">
          Earn your degrees and more
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <DegreeCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <DegreeCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <DegreeCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <DegreeCard />
          </Grid>
        </Grid>
        <Typography variant="h5" component="h2" className="heading">
          Explore variety of courses
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CourseCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CourseCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CourseCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CourseCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
