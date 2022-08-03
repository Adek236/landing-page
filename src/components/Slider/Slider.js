import "./Slider.css";
import Headline from "../Headline/Headline";

const Slider = () => {
  return (
    <div className="slider flex-center">
      <section>
        <Headline
          classStyle="slider__section__desc flex-center"
          title="Slider content"
          desc="Slider content"
        />
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
