import { useState, useEffect, useRef } from "react";
import "./Main.css";
import { useWindowWidth } from "../../controllers/controllers";
import videoBeachBackground from "../../assets/images/beach2.mp4";
import beachBackground from "../../assets/images/beach3.jpg";

const Main = ({ children }) => {
  const [slideNum, setSlideNum] = useState(1);
  const mainRef = useRef(null);
  const sectionRef = useRef(null);
  const { windowWidth } = useWindowWidth(mainRef);
  const { windowHeight } = useWindowWidth(sectionRef);
  const isVideoWindow =
    windowWidth >= 1200 && windowWidth / windowHeight <= 1.91 && windowWidth / windowHeight >= 1.6 ? true : false;

  useEffect(() => {
    let mainSlider = setInterval(() => {
      setSlideNum((prev) => {
        if (prev === 1) return (prev = 2);
        if (prev === 2) return (prev = 1);
      });
    }, 5000);
    return () => clearInterval(mainSlider);
  }, []);

  return (
    <main ref={mainRef} className="main">
      {console.log("width = " + windowWidth, " height = ", windowHeight)}
      {console.log(windowWidth / windowHeight)}
      <section
        ref={sectionRef}
        style={{
          backgroundImage: `url(${isVideoWindow ? "" : beachBackground})`,
          boxShadow: `${
            isVideoWindow ? "none" : "0px 1px 10px 0px rgba(0, 0, 0, 0.8)"
          }`,
        }}
      >
        <video
          style={{
            display: `${isVideoWindow ? "flex" : "none"}`,
          }}
          autoPlay
          loop
          muted
        >
          <source src={videoBeachBackground} type="video/mp4" />
        </video>
        <div className="main__section__container">
          <div className="main__section__container__desc flex-center">
            <div className="main__section__container__desc__prev-title text-shadow">
              Hello, travelers!
            </div>
            <h1>Welcome</h1>
            <div className="main__section__container__desc__slider text-shadow">
              <div
                className={
                  slideNum === 1
                    ? "main__section__container__desc__slider--show"
                    : "main__section__container__desc__slider--hide"
                }
              >
                to start your journey
              </div>
              <div
                className={
                  slideNum === 2
                    ? "main__section__container__desc__slider--show"
                    : "main__section__container__desc__slider--hide"
                }
              >
                to adventures
              </div>
              {/* to explore world */}
            </div>
          </div>
        </div>
      </section>
      {children}
    </main>
  );
};

export default Main;
