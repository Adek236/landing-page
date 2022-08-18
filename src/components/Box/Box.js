import { useRef } from "react";
import "./Box.css";
import fall from "../../assets/images/fall.jpg";
import fall1280 from "../../assets/images/fall1280.jpg";
import { useWindowWidth } from "../../controllers/controllers";

const Box = ({ children }) => {
  const boxRef = useRef(null);
  const { windowWidth } = useWindowWidth(boxRef);
  return (
    <div ref={boxRef} className="box flex-center">
      <div
        style={{
          backgroundImage: `url(${windowWidth > 640 ? fall1280 : fall})`,
        }}
        className="box__content flex-center"
      >
        <div className="box__children">{children}</div>
      </div>
    </div>
  );
};

export default Box;
