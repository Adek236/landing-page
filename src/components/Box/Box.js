import "./Box.css";
// import fall from "../../assets/images/fall.jpg";
import fall1280 from "../../assets/images/fall1280.jpg";

const Box = ({ children }) => {
  return (
    <div className="box flex-center">
      <div
        style={{
          backgroundImage: `url(${fall1280})`,
        }}
        className="box__content flex-center"
      >
        <div className="box__children">{children}</div>
      </div>
    </div>
  );
};

export default Box;
