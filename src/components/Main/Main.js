import "./Main.css";

const Main = ({ children }) => {
  return (
    <main className="main">
      <section>
        <div className="main__section__container">
          <div className="main__section__container__desc">
            <div className="main__section__container__desc__prev-title">Main content</div>
            <h1>Main content</h1>
            <div className="main__section__container__desc__slider">Main content</div>
          </div>
          <div className="main__section__container__image">Graphics</div>
        </div>
      </section>

      {children}
    </main>
  );
};

export default Main;
