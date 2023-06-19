import React from "react";
import "./Card.css";

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

const Card = ({ data, idx, activeIdx }) => {
  console.log("data", data);
  return (
    <div
      className={`${
        activeIdx === idx && "active__card-container"
      } card__container`}
    >
      {/* <img className="card__image" src={data?.image} alt="img" /> */}
      <div
        className="card__image"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        {/* <video src={data.image} controls muted /> */}
      </div>
      <div className="card__title-container">
        <div className="card__title">{data?.title}</div>
        <div className="card__paragraph">{data?.paragraph}</div>
        <div className="button__container">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
