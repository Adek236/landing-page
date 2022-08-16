import "./Credits.css";

const Credits = ({showCredits, setShowCredits}) => {
  return (
    <div className={showCredits? "credits flex-center active" : "credits flex-center"}>
      <div className="credits__content flex-center">
        <ul>
            <li onClick={() => setShowCredits(false)}>
                X
            </li>
          <li>
            Image by 
            <a href="https://pixabay.com/users/julius_silver-4371822/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3609863">
              Julius Silver 
            </a>
            from
            <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3609863">
              Pixabay
            </a>
          </li>
          <li>
            <a href="https://www.pexels.com/video/a-beautiful-beach-with-turquoise-water-1739010/">
              Video by Joseph Redfield
            </a>
          </li>
          <li>
            <a href="https://www.pexels.com/photo/landscape-photography-of-trees-on-shoreline-457882/">
              Photo by Asad Photo Maldives
            </a>
          </li>
          <li>
            <a href="https://www.pexels.com/photo/blue-textile-1078981/">
              Photo by Oliver Sjöström
            </a>
          </li>
          <li>
            <a href="https://www.pexels.com/photo/person-surfing-416676/">
              Photo by Pixabay
            </a>
          </li>
          <li>
            <a href="https://www.pexels.com/photo/clear-blue-sea-164041/">
              Photo by Pixabay
            </a>
          </li>
          <li>
            <a href="https://www.pexels.com/photo/photo-of-scenic-beach-resort-1591375/">
              Photo by Asad Photo Maldives
            </a>
          </li>
          <li>
            <a href="https://www.pexels.com/photo/brown-wooden-dock-near-brown-wooden-kayak-in-water-547119/">
              Photo by Krivec Ales
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Credits;
