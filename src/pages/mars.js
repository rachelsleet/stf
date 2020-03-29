import React from "react";

const Mars = () => (
  <div
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <iframe
      src="https://mars.nasa.gov/layout/embed/image/insightweather/"
      width="800"
      height="530"
      scrolling="no"
      frameborder="0"
    />
  </div>
);

export default Mars;
