import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f2f2f2", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginRight: "20px" }}>
          <img
            src="../images/Image1.png"
            alt="image1"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </div>
        <div style={{ marginRight: "20px" }}>
          <img
            src="../images/Image2.png"
            alt="image2"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </div>
        <div style={{ marginRight: "20px" }}>
          <img
            src="../images/Image3.png"
            alt="image3"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </div>
        <div>
          <img
            src="../images/Image4.png"
            alt="image4"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
