import "./Headline.css";
const Headline = ({ classStyle, title, desc }) => {
  return (
    <div
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
