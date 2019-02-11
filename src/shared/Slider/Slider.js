import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import SpecializationCard from "../../components/Common/SpecializationCard";
import DegreeCard from "../../components/Common/DegreeCard";
import CourseCard from "../../components/Common/CourseCard";
import {connect} from "react-redux";

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
        <SpecializationCard courseName={item.name} courseImage={item.imageUrl}/>
      ));
    } else if (this.props.cardType === "degree") {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, i) => (
        <DegreeCard />
      ));
    } else {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, i) => (
        <CourseCard />
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
    specialization:state.specialization.info
  }
}

export default connect(mapStateToProps)(Slider);
