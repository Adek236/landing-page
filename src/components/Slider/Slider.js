import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider">
        <section>
          <div className="slider__btn">"x"</div>
          <ul>
            <li>
              <h3>Slider content1</h3>
              <div>"Slider content"</div>
              <div>Stars</div>
              <div>Slider content</div>
            </li>
            <li>
              <h3>Slider content2</h3>
              <div>"Slider content"</div>
              <div>Stars</div>
              <div>Slider content</div>
            </li>
            <li>
              <h3>Slider content3</h3>
              <div>"Slider content"</div> 
              <div>Stars</div>
              <div>Slider content</div>
            </li>
            <li>
              <h3>Slider content4</h3>
              <div>"Slider content"</div>
              <div>Stars</div>
              <div>Slider content</div>
            </li>
            <li>
              <h3>Slider content5</h3>
              <div>"Slider content"</div>
              <div>Stars</div>
              <div>Slider content</div>
            </li>
            <li>
              <h3>Slider content6</h3>
              <div>"Slider content"</div>
              <div>Stars</div>
              <div>Slider content</div>
            </li>
          </ul>
          <div className="slider__btn">"x"</div>
      </section>
      <nav>
        <ul className="flex-center">
          {Array.from({ length: 6 }).map(() => {
            return (
              <li className="slider__dots"></li>
            )
          })}
        </ul>
      </nav>  
    </div>
  );
};

export default Slider;
