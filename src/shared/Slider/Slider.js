import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import SpecializationCard from "../../components/Common/SpecializationCard";
import DegreeCard from "../../components/Common/DegreeCard";
import CourseCard from "../../components/Common/CourseCard";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';

class Slider extends React.Component {
  responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1368: { items: 4 }
  };

  onSlideChange(e) {
    console.log("Item`s position during a change: ", e.item);
    console.log("Slide`s position during a change: ", e.slide);
  }

  onSlideChanged(e) {
    console.log("Item`s position after changes: ", e.item);
    console.log("Slide`s position after changes: ", e.slide);
  }

  galleryItems() {
    if (this.props.cardType === "specialization") {
      const specialization=this.props.specialization;
      return specialization.map((item, i) => (
        <SpecializationCard courseName={item.title} courseImage={item.imageUrl} data={this.props.specialization[i]}/>
      ));
    } else if (this.props.cardType === "degree") {   
      const degrees=this.props.degrees;   
      console.log(degrees);
      return degrees.map((item, i) => (
        <DegreeCard degreeName={item.title} degreeImage={item.imageUrl} degreeProvider={item.taughtBy} data={this.props.degrees[i]}/>
      ));
    } else {
      const courses=this.props.courses;
      return courses.map((item, i) => (
        <CourseCard courseName={item.title} courseImage={item.imageUrl} courseProvider={item.offeredBy} data={this.props.courses[i]}/>
      ));
    }
  }

  render() {
    const items = this.galleryItems();

    return (
      <AliceCarousel
        items={items}
        autoPlay={false}
        startIndex={1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={false}
        autoPlayDirection="rtl"
        responsive={this.responsive}
        disableAutoPlayOnAction={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      />
    );
  }
}

const mapStateToProps=state=>{
  return{
    specialization:state.specialization.info,
    courses:state.courses.info,
    degrees:state.degrees.info
  }
}

export default connect(mapStateToProps)(withRouter(Slider));
