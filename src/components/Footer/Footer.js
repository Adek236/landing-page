import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useInView } from "react-intersection-observer";

const Footer = ({ setShowCredits }) => {
  const { ref: footerRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
    trackVisibility: true,
    delay: 500,
  });
  return (
    <footer ref={footerRef} className="footer flex-center">
      <div className={`footer__nav ${myElementIsVisible ? "activeObs" : ""}`}>
        <div className="footer__nav__copyright">2022 ALL RIGHTS RESERVED.</div>
        <nav aria-label="Secondary">
          <ul>
            <li>
              <div
                tabIndex="0"
                className="credits-btn"
                onClick={() => setShowCredits(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setShowCredits(true);
                  }
                }}
              >
                Credits
              </div>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
            <li>
              <a href="/">Cookies</a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`footer__socials flex-center ${
          myElementIsVisible ? "activeObs" : ""
        }`}
      >
        <nav aria-label="Third">
          <ul>
            <li>
              <a role="button" aria-label="Facebook" href="/">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a role="button" aria-label="Instagram" href="/">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a role="button" aria-label="Twitter" href="/">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a role="button" aria-label="Google" href="/">
                <GoogleIcon />
              </a>
            </li>
            <li>
              <a role="button" aria-label="Linked in" href="/">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a role="button" aria-label="Youtube" href="/">
                <YouTubeIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
