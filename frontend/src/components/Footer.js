import React from "react";
//import { Twitter, Facebook, Instagram } from "@material-ui/icons";

import image1 from "../images/Image1.png";
import image2 from "../images/Image2.png";
import image3 from "../images/Image3.png";
import image4 from "../images/Image4.png";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f2f2f2", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginRight: "20px" }}>
          <img
            src={image1}
            alt="image1"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </div>
        <div style={{ marginRight: "20px" }}>
          <img
            src={image2}
            alt="image2"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </div>
        <div style={{ marginRight: "20px" }}>
          <img
            src={image3}
            alt="image3"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </div>
        <div>
          <img
            src={image4}
            alt="image4"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
