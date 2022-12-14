import React, { useState, useRef } from "react";
import "./Slider.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import { comments as data } from "../../data/data";
import { useInView } from "react-intersection-observer";
import { useWindowWidth } from "../../controllers/controllers";

const Slider = () => {
  const sliderWidthRef = useRef(null);
  const { ref: sliderRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
    trackVisibility: true,
    delay: 300,
  });
  const [sliderIndex, setSliderIndex] = useState(0);
  const commentsRef = useRef(null);
  const dataLength = data.length;

  const viewElement = (index) => {
    setSliderIndex(index);
    commentsRef.current.children[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const { windowWidth } = useWindowWidth(sliderWidthRef);

  return (
    <div ref={sliderRef} className="slider">
      <section
        ref={sliderWidthRef}
        className={`${myElementIsVisible ? "activeObs" : ""}`}
      >
        <div
          tabIndex={windowWidth >= 1010 ? "0" : "-1"}
          aria-hidden={windowWidth >= 1010 ? "false" : "true"}
          role="button"
          aria-label="Comments number 1, 2, 3"
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
        <ul ref={commentsRef}>
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
          tabIndex={windowWidth >= 1010 ? "0" : "-1"}
          aria-hidden={windowWidth >= 1010 ? "false" : "true"}
          aria-label="Comments number 4, 5, 6"
          role="button"
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
      <nav className={`${myElementIsVisible ? "activeObs" : ""}`}>
        <ul className="flex-center">
          {Array.from({ length: dataLength }).map((el, index) => {
            return (
              <li
                tabIndex="0"
                aria-label={`Comment number ${index + 1}`}
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
