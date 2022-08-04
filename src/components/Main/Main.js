import "./Main.css";
import beachBackground2 from "../../assets/images/beach2.mp4";
// import beachBackground from "../../assets/images/beach3.jpg";

const Main = ({ children }) => {
  return (
    <main className="main">
      <section 
      // style={{ backgroundImage: `url(${beachBackground})` }}
      >
        
      <video className="videobg" autoPlay loop muted>
          <source
            src={beachBackground2}
            type="video/mp4"
          />
        </video>
        <div className="main__section__container">
          <div className="main__section__container__desc flex-center">
            <div className="main__section__container__desc__prev-title text-shadow">
              Hello, travelers!
            </div>
            <h1>Welcome</h1>
            <div className="main__section__container__desc__slider text-shadow">
              to start your journey
            </div>
          </div>
        </div>
      </section>
      {children}
    </main>
  );
};

export default Main;
