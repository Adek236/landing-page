import "./Headline.css";
import { useInView } from "react-intersection-observer";

const Headline = ({ id, title, desc }) => {
  const { ref: headlineRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
    trackVisibility: true,
    delay: 300,
  });
  return (
    <div ref={headlineRef} id={id} className="headline flex-center">
      <section className={`flex-center ${myElementIsVisible ? "activeObs" : ""}`}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </section>
    </div>
  );
};

export default Headline;
