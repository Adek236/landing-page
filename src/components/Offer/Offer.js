import "./Offer.css";
import { offer as data } from "../../data/data";

const Offer = ({ id }) => {
  return (
    <div className="offer">
      <section className="offer__section">
        <div 
        style={{
          backgroundImage: `url(${data[id].img})`
        }}
        className="offer__section__image"></div>
        <div className="offer__section__desc flex-center">
            <h2>{data[id].title}</h2>
            <p>{data[id].desc}</p>
        </div>
      </section>
    </div>
  );
};

export default Offer;
