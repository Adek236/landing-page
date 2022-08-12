import React from "react";
import "./Button.css";

const Button = ({ title, position }) => {
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
        aria-labelledby={title}
        className="fill-container"
        href="/"
      >
        {" "}
      </a>
    </div>
  );
};

export default Button;
