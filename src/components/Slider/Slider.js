import { useState, useRef } from "react";

import "./Slider.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";

import { comments as data } from "../../data/data";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const ref = useRef(null);

  const viewElement = (index) => {
    console.log(ref.current.children[index])
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
        <div className="slider__btn flex-center" onClick={() => viewElement(0)}>
          <ArrowBackIosNewIcon />
        </div>
        <ul ref={ref}>
          {data.map((data, index) => {
            return (
              <li id={data.id} key={data.id} className="flex-center">
                <h3>
                  {data.title}
                  {index}
                </h3>
                <p>"{data.desc}"</p>
                <div className="slider__stars">
                  <StarIcon />
                </div>
                <div className="slider__author">by {data.author}</div>
              </li>
            );
          })}
        </ul>
        <div className="slider__btn flex-center" onClick={() => viewElement(5)}>
          <ArrowForwardIosIcon />
        </div>
      </section>
      <nav>
        <ul className="flex-center">
          {Array.from({ length: data.length }).map((el, index) => {
            return (
              <li
                key={index}
                className={sliderIndex === index ? "slider__dots active" : "slider__dots"}
                onClick={() => viewElement(index)}
              ></li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Slider;
