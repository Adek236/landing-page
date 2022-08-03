import "./Box.css";

const Box = ({ children }) => {
  return (
    <div className="box flex-center">
      <div className="box__content flex-center">{children}</div>
    </div>
  );
};

export default Box;
