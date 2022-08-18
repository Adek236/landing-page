import { useRef } from "react";
import "./Modal.css";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef(null);
  return (
    <div
      onTransitionEnd={() => modalRef.current.focus()}
      className={showModal ? "modal active" : "modal"}
    >
      <nav aria-label="Priority">
        <ul className="flex-center">
          <li>
            <a ref={modalRef} onClick={() => setShowModal(false)} href="#top">
              TOP
            </a>
          </li>
          <li>
            <a onClick={() => setShowModal(false)} href="/">
              LAST MINUTE
            </a>
          </li>
          <li>
            <a onClick={() => setShowModal(false)} href="#academy">
              ACADEMY
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
              COMMENTS
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Modal;
