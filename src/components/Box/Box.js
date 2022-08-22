import { useRef } from "react";
import "./Box.css";
import fall from "../../assets/images/fall.jpg";
import fall1280 from "../../assets/images/fall1280.jpg";
import { useWindowWidth } from "../../controllers/controllers";
import { useInView } from "react-intersection-observer";

const Box = ({ children }) => {
  const { ref: boxContentRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
    trackVisibility: true,
    delay: 300,
  });
  const boxRef = useRef(null);
  const { windowWidth } = useWindowWidth(boxRef);
  return (
    <div ref={boxRef} className="box flex-center">
      <div
        ref={boxContentRef}
        style={{
          backgroundImage: `url(${windowWidth > 640 ? fall1280 : fall})`,
        }}
        className={`box__content flex-center ${myElementIsVisible ? "activeObs" : ""}`}
        // className="box__content flex-center"
      >
        <div className="box__children">{children}</div>
      </div>
    </div>
  );
};

export default Box;
