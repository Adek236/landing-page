import React from "react";
import "./Button.css";
import { useInView } from "react-intersection-observer";
import { offers as data } from "../../data/data";

const Button = ({ title, position, link, ariaName, idTitle }) => {
  const { ref: btnRef, inView: btnRefIsVisible } = useInView({
    trackVisibility: true,
    delay: 1000,
  });

  const aria = data[idTitle]?.title || ariaName;

  return (
    <div
      ref={btnRef}
      className={`${
        position === "vertical"
          ? "button vertical flex-center"
          : "button flex-center"
      } ${btnRefIsVisible ? "activeObs" : ""}`}
    >
      <h2>{title}</h2>
      <a role="button" aria-label={aria} className="fill-container" href={link}>
        {" "}
      </a>
    </div>
  );
};

export default Button;
