import "./Headline.css";
const Headline = ({ id, classStyle, title, desc }) => {
  return (
    <div
      id={id}
      className={classStyle === undefined ? "headline flex-center" : classStyle}
    >
      <section className="flex-center">
        <h2>{title}</h2>
        <p>{desc}</p>
      </section>
    </div>
  );
};

export default Headline;
