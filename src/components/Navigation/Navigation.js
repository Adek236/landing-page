import MenuIcon from "@mui/icons-material/Menu";
import DiamondIcon from "@mui/icons-material/Diamond";
import PersonIcon from "@mui/icons-material/Person";
import "./Navigation.css";

function NavBar({ setShowModal }) {
  return (
    <div className="nav-bar">
      <nav aria-label="Primary mobile" className="nav-mobile">
        <div>
          <a role="button" aria-label="Login" href="/">
            <PersonIcon />
          </a>
        </div>
        <div>
          <a role="button" aria-label="Home page" href="/">
            <DiamondIcon />
          </a>
        </div>
        <div
          role="button"
          aria-label="Open modal"
          tabIndex="0"
          // onClick={() => setShowModal(true)}
          // onKeyDown={(e) => {
          //   if (e.key === "Enter") {
          //     setShowModal(true);
          //   }
          // }}
        >
          <MenuIcon />
        </div>
      </nav>

      <nav aria-label="Primary desktop" className="nav-desktop">
        <div className="flex-center">
          <a
            role="button"
            aria-label="Home page"
            href="/"
            className="flex-center"
          >
            <DiamondIcon />
          </a>
        </div>
        <ul>
          <li>
            <a href="/" className="text-shadow">
              HOME
            </a>
          </li>
          <li>
            <a href="/" className="text-shadow">
              NEWS
            </a>
          </li>
          <li>
            <a href="/" className="text-shadow">
              GUIDES
            </a>
          </li>
          <li>
            <a href="/" className="text-shadow">
              OFFERS
            </a>
          </li>
          <li>
            <a href="/" className="text-shadow flex-center">
              LOGIN <PersonIcon />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
