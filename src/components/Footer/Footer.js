import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import fallBackground from "../../assets/images/fall.jpg";

const Footer = ({ children }) => {
  return (
    <footer 
    style={{
      // backgroundImage: `url(${fallBackground})`
    }}
    className="footer">
      <div className="footer__nav">
        <div className="footer__nav__copyright">2022 ALL RIGHTS RESERVED.</div>
        <nav aria-label="Third">
          <ul>
            <li>
              <div
                tabIndex="0"

                // onClick={() => setShowCredit(true)}
                // onKeyDown={(e) => {
                //   if (e.key === "Enter") {
                //     setShowCredit(true);
                //   }
                // }}
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
      <div className="footer__socials flex-center">
        <nav aria-label="Secondary">
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
              <a role="button" aria-label="Twitter" href="/">
                <GoogleIcon />
              </a>
            </li>
            <li>
              <a role="button" aria-label="Twitter" href="/">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a role="button" aria-label="Twitter" href="/">
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
