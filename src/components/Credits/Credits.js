import { useRef } from "react";
import "./Credits.css";
import ClearIcon from "@mui/icons-material/Clear";

const Credits = ({ showCredits, setShowCredits }) => {
  const creditsRef = useRef(null);
  const lastLinkRef = useRef(null);
  return (
    <div
      aria-hidden={showCredits ? "false" : ""}
      className={
        showCredits ? "credits flex-center active" : "credits flex-center"
      }
      onAnimationEnd={() => creditsRef.current.focus()}
    >
      <div
        aria-modal="true"
        role="dialog"
        aria-label="Modal is on"
        aria-hidden={showCredits ? "false" : "true"}
        className="credits__content flex-center"
      >
        <ul>
          <li
            ref={creditsRef}
            tabIndex="0"
            role="button"
            aria-label="Close modal"
            className="exit-btn"
            onClick={() => setShowCredits(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setShowCredits(false);
              }
              if (e.key === "Tab" && e.shiftKey) {
                lastLinkRef.current.focus();
              }
            }}
          >
            <ClearIcon />
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
            <a
              ref={lastLinkRef}
              onKeyDown={(e) => {
                if (e.key === "Tab" && !e.shiftKey) {
                  creditsRef.current.focus();
                }
              }}
              href="https://www.pexels.com/photo/brown-wooden-dock-near-brown-wooden-kayak-in-water-547119/"
            >
              Photo by Krivec Ales
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Credits;
