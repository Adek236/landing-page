// import { useRef } from "react";

import "./Slider.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";

import { comments as data } from "../../data/data";

const Slider = () => {
  // const refr = useRef(null);
  // const viewElement = () =>
  //   refr.current.target.scrollIntoView({
  //     behavior: "smooth",
  //     block: "center",
  //     inline: "center",
  //   });

  return (
    <div className="slider">
      <section>
        <div className="slider__btn flex-center">
          <ArrowBackIosNewIcon />
        </div>
        <ul>
          {data.map((data) => {
            return (
              <li key={data.id} className="flex-center">
                <h3>{data.title}</h3>
                <p>"{data.desc}"</p>
                <div className="slider__stars">
                  <StarIcon />
                </div>
                <div className="slider__author">by {data.author}</div>
              </li>
            );
          })}
        </ul>
        <div className="slider__btn flex-center">
          <ArrowForwardIosIcon />
        </div>
      </section>
      <nav>
        <ul className="flex-center">
          {Array.from({ length: 6 }).map((el, index) => {
            return <li key={index} className="slider__dots"></li>;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Slider;
