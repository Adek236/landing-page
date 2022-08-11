import "./LayoutBgChanger.css";

const LayoutBgChanger = ({ children }) => {
  return (
      <div id="top" className="bg-changer">{children}</div>
  );
};

export default LayoutBgChanger;
