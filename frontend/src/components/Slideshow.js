import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import elephant from "../images/elephant.png";
import yala from "../images/yala.png";
import hills from "../images/hills.png";
import sigiriya from "../images/sigiriya.png";

const slideImages = [
  {
    url: elephant,
    caption: "elephant",
  },
  {
    url: yala,
    caption: "Yala",
  },
  {
    url: hills,
    caption: "Nuwara-Eliya",
  },
  {
    url: sigiriya,
    caption: "Sigiriya",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((image, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${image.url})`,
                height: "250px",
                width: "450px",
                backgroundRepeat: "no-repeat",
                textAlign: "center",
              }}
            >
              <span>{image.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
