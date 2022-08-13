import { useState, useEffect, useRef } from "react";
import "./Main.css";
import { useWindowWidth } from "../../controllers/controllers";
import videoBeachBackground from "../../assets/images/beach2.mp4";
import beachBackground from "../../assets/images/beach3.jpg";
import { main as data } from "../../data/data";

const Main = ({ children }) => {
  const [slideNum, setSlideNum] = useState(1);
  const mainRef = useRef(null);
  const sectionRef = useRef(null);
  const { windowWidth } = useWindowWidth(mainRef);
  const { windowHeight } = useWindowWidth(sectionRef);
  const crossWindow = windowWidth / windowHeight;
  const isVideoWindow =
    windowWidth >= 1200 && crossWindow <= 2.1 && crossWindow >= 1.6
      ? true
      : false;

  useEffect(() => {
    let mainSlider = setInterval(() => {
      setSlideNum((prev) => {
        if (prev < data[0].desc.length) return (prev = prev + 1);
        if (prev >= data[0].desc.length) return (prev = 1);
      });
    }, 5000);
    return () => clearInterval(mainSlider);
  }, []);

  return (
    <main ref={mainRef} className="main">
      <section
        ref={sectionRef}
        style={{
          backgroundImage: `url(${isVideoWindow ? "" : beachBackground})`,
          boxShadow: `${
            isVideoWindow ? "none" : "0px 1px 10px 0px rgba(0, 0, 0, 0.8)"
          }`,
          marginBottom: `${
            crossWindow >= 1.85 && crossWindow <= 2.1 ? "8rem" : ""
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
              {data[0].prevTitle}
            </div>
            <h1 className="text-shadow">{data[0].title}</h1>
            <div className="main__section__container__desc__slider text-shadow">
              {data[0].desc.map((desc, index) => {
                return (
                  <div
                    key={index}
                    className={
                      slideNum === index + 1
                        ? "main__section__container__desc__slider--show"
                        : "main__section__container__desc__slider--hide"
                    }
                  >
                    {desc}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {children}
    </main>
  );
};

export default Main;
