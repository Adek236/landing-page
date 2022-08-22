import "./Div.css";
import { useInView } from "react-intersection-observer";

const Div = ({ children }) => {
  const { ref: divRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
    trackVisibility: true,
    delay: 300,
  });
  return <div ref={divRef} className={`div ${myElementIsVisible ? "activeObs" : ""}`}>{children}</div>;
};

export default Div;
