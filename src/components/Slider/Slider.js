import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider flex-center">
      <section>
        <div className="slider__section__desc flex-center">
          <h2>Slider content</h2>
          <p>Slider content</p>
        </div>
        <div className="slider__section__news flex-center">
          <ul className="flex-center">
            <li>
              <h3>Slider content</h3>
              <div>"Slider content"</div>
              <div>Stars</div>
              <div>Slider content</div>
            </li>
            <li>
              <h3>Slider content</h3>
              <div>"Slider content"</div>
              <div>Stars</div>
              <div>Slider content</div>
            </li>
            <li>
              <h3>Slider content</h3>
              <div>"Slider content"</div>
              <div>Stars</div>
              <div>Slider content</div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Slider;
