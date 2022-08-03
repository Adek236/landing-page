import "./Headline.css";
const Headline = ({ classStyle, title, desc }) => {
  return (
    <div
      className={classStyle === undefined ? "headline flex-center" : classStyle}
    >
      {console.log("el ", classStyle)}
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Headline;
