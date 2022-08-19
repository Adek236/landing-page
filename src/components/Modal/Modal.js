// import { useRef } from "react";
import "./Modal.css";

const Modal = ({ showModal, setShowModal, modalRef }) => {
  return (
    <div
      // onTransitionEnd={() => modalRef.current.focus()}
      className={showModal ? "modal active" : "modal"}
    >
      <nav aria-label="Priority">
        <ul className="flex-center">
          <li ref={modalRef} tabIndex="0">
            <a onClick={() => setShowModal(false)} href="#top">
              Top
            </a>
          </li>
          <li>
            <a onClick={() => setShowModal(false)} href="/">
              Last Minute
            </a>
          </li>
          <li>
            <a onClick={() => setShowModal(false)} href="#academy">
              Academy
            </a>
          </li>
          <li>
            <a
              // onKeyDown={(e) => {
              //   if (e.key === "Tab") {
              //     modalRef.current.focus();
              //   }
              // }}
              onClick={() => setShowModal(false)}
              href="#comments"
            >
              Comments
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Modal;
