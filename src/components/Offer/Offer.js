import "./Offer.css";
import { useInView } from "react-intersection-observer";
import { offers as data } from "../../data/data";

const Offer = ({ id, children }) => {
  const { ref: offerRef, inView: offerRefIsVisible } = useInView({
    triggerOnce: true,
    trackVisibility: true,
    delay: 400,
  });
  const { ref: offerDescRef, inView: offerDescRefIsVisible } = useInView({
    triggerOnce: true,
    trackVisibility: true,
    delay: 500,
  });
  return (
    <div className="offer">
      <section ref={offerRef} className={`offer__section ${offerRefIsVisible ? "activeObs" : ""}`}>
        <div
          style={{
            backgroundImage: `url(${data[id].img})`,
          }}
          className="offer__section__image"
        >
          <div className="offer__section__image__children">{children}</div>
        </div>
        <div ref={offerDescRef} className={`offer__section__desc flex-center ${offerDescRefIsVisible ? "activeObs" : ""}`}>
          <h2>{data[id].title}</h2>
          <p>{data[id].desc}</p>
        </div>
      </section>
    </div>
  );
};

export default Offer;
