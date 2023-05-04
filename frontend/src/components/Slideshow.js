import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import hikkaduwa from "../images/hikkaduwa.png";
import yala from "../images/yala.png";
import hills from "../images/hills.png";
import sigiriya from "../images/sigiriya.png";

const Slideshow = () => {
  const slideImages = [
    {
      src: { hikkaduwa },
      caption: "Hikkaduwa",
    },
    {
      src: { yala },
      caption: "Yala",
    },
    {
      src: { hills },
      caption: "Nuwara-Eliya",
    },
    {
      src: { sigiriya },
      caption: "Sigiriya",
    },
  ];

  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((image, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `src(${image.src})` }}>
              <span>{image.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

/*
const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % 4);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const images = ["hikkaduwa.png", "yala.png", "hills.png", "sigiriya.png"];

  return (
    <div
      className="slideshow"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <img src={hikkaduwa} alt="image1" />
      <img src={yala} alt="image2" />
      <img src={hills} alt="image3" />
      <img src={sigiriya} alt="image4" />
    </div>
  );
};
*/

export default Slideshow;
