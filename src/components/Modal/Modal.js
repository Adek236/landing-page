import "./Modal.css";

const Modal = ({ showModal, setShowModal, modalRef, navigationRef }) => {
  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label="Modal is on"
      aria-hidden={showModal ? "false" : "true"}
      className={showModal ? "modal active" : "modal"}
      onAnimationEnd={() => modalRef.current.firstElementChild.focus()}
    >
      <nav aria-label="Priority">
        <ul className="flex-center">
          <li 
          tabIndex="0" 
          ref={modalRef}
          >
            <a
              onKeyDown={(e) => {
                if (e.key === "Tab" && e.shiftKey) {
                  console.log(navigationRef);
                  navigationRef.current.focus();
                }
              }}
              onClick={() => setShowModal(false)}
              href="#top"
            >
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
            <a onClick={() => setShowModal(false)} href="#comments">
              Comments
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Modal;
