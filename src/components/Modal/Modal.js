import "./Modal.css";

const Modal = ({ showModal, setShowModal, modalRef, navigationRef }) => {
  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label="Modal is on"
      aria-hidden={showModal ? "false" : "true"}
      className={showModal ? "modal active" : "modal"}
    >
      <nav aria-label="Priority">
        <ul className="flex-center">
          <li 
          ref={modalRef} 
          tabIndex="0"
          >
            <a
              onKeyDown={(e) => {
                if (e.key === "Tab" && e.shiftKey) {
                  navigationRef.current.focus();
                  // console.log("hi");
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
