import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css"; // Import the CSS file for styling
import Card from "./Components/Card";
let mockData = [
  {
    image: "https://i.postimg.cc/RhYnBf5m/er-slider.jpg",
    title: "Pre-Production",
    paragraph: "How Stellantis is powering limitless learning with video"
  },
  {
    image: "https://i.postimg.cc/qBGQNc37/ro-slider.jpg",
    title: "Pre-Production",
    paragraph: "How Stellantis is powering limitless learning with video"
  },
  {
    image: "https://i.postimg.cc/C12h7nZn/ms-1.jpg",
    title: "Pre-Production",
    paragraph: "How Stellantis is powering limitless learning with video"
  }
];

let boolean = false;

function Carousel({ mockData }) {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselRef = useRef(null);

  if (!boolean) {
    mockData.push(mockData[0]);
    boolean = true;
  }

  // const resetCurrentImage = () => {

  //   setCurrentImage(0);
  // };

  useEffect(() => {
    // Check if currentImage is the last image index
    if (currentImage === mockData.length - 1) {
      setCurrentImage(0);
      // setTimeout(resetCurrentImage, 0); // Reset to the first image after 5 seconds
    }
  }, [currentImage]);

  console.log("data", mockData);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentImage * 92}%)` }}
      >
        {mockData.map((data, index) => (
          <Card data={data} idx={index} activeIdx={currentImage} />
        ))}
      </div>
      <div className="dot-container">
        {mockData.map((image, index) => (
          <div
            key={index}
            className={`dot ${index === currentImage ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
