import React from "react";
import "./Button.css";
import { offers as data } from "../../data/data";

const Button = ({ title, position, link, ariaName, idTitle }) => {
  const aria = data[idTitle]?.title || ariaName;
  return (
    <div
      className={
        position === "vertical"
          ? "button vertical flex-center"
          : "button flex-center"
      }
    >
      <h2>{title}</h2>
      <a
        role="button"
        aria-label={aria}
        className="fill-container"
        href={link}
      >
        {" "}
      </a>
    </div>
  );
};

export default Button;
