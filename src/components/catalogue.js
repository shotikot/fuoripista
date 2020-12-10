import React, { useState, useRef } from "react";
import Slider from "react-slick";
import photo1 from "../assets/slide-1.jpg";
import photo2 from "../assets/slide-2.png";
import photo3 from "../assets/slide-3.jpg";
import "../styles/catalogue.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    photo: photo1,
    title: "Lorem Ipsum",
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    subDescription:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    infoTabs: [
      {
        text: "Lorem Ipsum dol sit amet",
        percentage: 30,
      },
      {
        text: "Standard dummy text ever since the 1500s,",
        percentage: 70,
      },
    ],
  },
  {
    photo: photo2,
    title: "Lorem Ipsum",
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    subDescription:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    infoTabs: [
      {
        text: "Lorem Ipsum dol sit amet",
        percentage: 30,
      },
      {
        text: "Standard dummy text ever since the 1500s,",
        percentage: 70,
      },
    ],
  },
];

const nav = ["Specifiche", "Specifiche", "Specifiche", "Specifiche"];

export const Catalogue = () => {
  const [index, setIndex] = useState(0);
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    draggable: false,
  };
  const sliderRef = useRef(null);
  return (
    <div className="catalogue-container">
      <Slider {...settings} ref={sliderRef}>
        {data.map((item, i) => (
          <div key={i}>
            <div className="slide-grid">
              <div className="slide-info">
                <h2>{item.title}</h2>
                <p className="item-description">{item.description}</p>
                <p className="item-sub">{item.subDescription}</p>
                {item.infoTabs.map((item, i) => (
                  <div key={i} className="info-tab">
                    <span>{item.text}</span>
                    <span className="percentage">{item.percentage}%</span>
                  </div>
                ))}
              </div>
              <div className="item-picture">
                <img src={item.photo} alt="error" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="custom-nav">
        <ul className="custom-dots">
          {nav.map((item, i) => (
            <li
              key={i}
              className={i === index ? "active-li" : ""}
              onClick={() => {
                setIndex(i);
                sliderRef.current.slickGoTo(i);
              }}
            >
              &nbsp;{item}&nbsp;{i === 3 ? "" : "/"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
