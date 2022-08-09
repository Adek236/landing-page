import "./Offer.css";
import fallBackground from "../../assets/images/fall.jpg";

const Offer = () => {
  return (
    <div className="offer">
      <section className="offer__section">
        <div 
        style={{
          backgroundImage: `url(${fallBackground})`
        }}
        className="offer__section__image"></div>
        <div className="offer__section__desc flex-center">
            <h2>Offer content</h2>
            <p>Offer content</p>
        </div>
      </section>
    </div>
  );
};

export default Offer;
