import React from "react";

export default function ImageContainer({img_src}){
    return(
        <div className="image-container">
            <img src={img_src} alt="Alt text"/>
        </div>
    )
}