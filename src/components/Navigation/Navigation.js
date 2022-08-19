import "./Navigation.css";
import MenuIcon from "@mui/icons-material/Menu";
import DiamondIcon from "@mui/icons-material/Diamond";
import PersonIcon from "@mui/icons-material/Person";

function NavBar({ showModal, setShowModal, modalRef }) {
  const toggleShowModal = () => {
    setShowModal((prev) => !prev);
  };

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
          onClick={() => toggleShowModal()}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              toggleShowModal();
            }
            if (e.key === "Tab" && showModal) {
              modalRef.current.focus();
            }
          }}
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
            <a href="#top">Top</a>
          </li>
          <li>
            <a href="/">Last Minute</a>
          </li>
          <li>
            <a href="#academy">Academy</a>
          </li>
          <li>
            <a href="#comments">Comments</a>
          </li>
          <li>
            <a href="/" className="flex-center">
              Login <PersonIcon />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
