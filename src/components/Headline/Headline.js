import "./Headline.css";
import { useInView } from "react-intersection-observer";

const Headline = ({ id, title, desc }) => {
  const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce: true});
  return (
    <div ref={myRef} id={id} className="headline flex-center">
      <section  className={`flex-center ${myElementIsVisible ? "active" : ""}`}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </section>
    </div>
  );
};

export default Headline;
