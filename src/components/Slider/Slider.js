import React, { useState, useRef } from "react";
import "./Slider.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import { comments as data } from "../../data/data";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const ref = useRef(null);
  const dataLength = data.length;

  const viewElement = (index) => {
    setSliderIndex(index);
    ref.current.children[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className="slider">
      <section>
        <div
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              viewElement(0);
            }
          }}
          className="slider__btn flex-center"
          onClick={() => viewElement(0)}
        >
          <ArrowBackIosNewIcon />
        </div>
        <ul ref={ref}>
          {data.map((data) => {
            return (
              <li id={data.id} key={data.id} className="flex-center">
                <h3>{data.title}</h3>
                <p>"{data.desc}"</p>
                <div className="slider__stars">
                  {Array.from({ length: data.stars }).map((el, index) => {
                    return (
                      <React.Fragment key={index}>
                        <StarIcon />
                      </React.Fragment>
                    );
                  })}
                </div>
                <div className="slider__author">by {data.author}</div>
              </li>
            );
          })}
        </ul>
        <div
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              viewElement(dataLength - 1);
            }
          }}
          className="slider__btn flex-center"
          onClick={() => viewElement(dataLength - 1)}
        >
          <ArrowForwardIosIcon />
        </div>
      </section>
      <nav>
        <ul className="flex-center">
          {Array.from({ length: dataLength }).map((el, index) => {
            return (
              <li
                tabIndex="0"
                key={index}
                className={
                  sliderIndex === index ? "slider__dots active" : "slider__dots"
                }
                onClick={() => viewElement(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    viewElement(index);
                  }
                }}
              ></li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Slider;
