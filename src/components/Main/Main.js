import "./Main.css";
// import beachBackground from "../../assets/images/beach2.mp4";

const Main = ({ children }) => {
  return (
    <main className="main">
      <section 
      // style={{ backgroundImage: `url(${beachBackground})` }}
      >
        
        <div className="main__section__container">
          <div className="main__section__container__desc">
            <div className="main__section__container__desc__prev-title">
              Main content
            </div>
            <h1>Main content</h1>
            <div className="main__section__container__desc__slider">
              Main content
            </div>
          </div>
          <div className="main__section__container__image">Graphics</div>
        </div>
      </section>
      {/* <video className="videobg" autoPlay loop muted>
          <source
            src={beachBackground}
            type="video/mp4"
          />
        </video> */}
      {children}
    </main>
  );
};

export default Main;
