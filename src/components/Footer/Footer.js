import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = ({ children }) => {
  return (
    <footer className="footer">
      <div className="footer__socials">
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
          </ul>
        </nav>
      </div>
      <div>
        <div>2022 ALL RIGHTS RESERVED.</div>
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
              <a href="/">Contact Us</a>
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
    </footer>
  );
};

export default Footer;
