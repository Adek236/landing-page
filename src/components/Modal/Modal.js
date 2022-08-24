// import { useState } from "react";
import "./Modal.css";

const Modal = ({ showModal, setShowModal, modalRef, navigationRef }) => {
  // const [tabKey, setTabKey] = useState(false);
  // const [shiftKey, setShiftKey] = useState(false);

  // const keyModify = (e, wichKeyEvent) => {
  //   console.log("ekey ", e.key)
  //   if (e.key === "Shift") {
  //     wichKeyEvent === "down" ? setShiftKey(true): setShiftKey(false);
  //   }
  //   if (e.key === "Tab") {
  //     wichKeyEvent === "down" ? setTabKey(true): setTabKey(false);
  //   }
  //   if (tabKey === true && shiftKey === true)
  //     console.log("hi");
  //     console.log(shiftKey, tabKey)
  // }

  return (
    <div
      // onTransitionEnd={() => modalRef.current.focus()}
      className={showModal ? "modal active" : "modal"}
    >
      <nav aria-label="Priority">
        <ul className="flex-center">
          <li
            ref={modalRef}
            tabIndex="0"
            // onFocus={()=> navigationRef.current.focus()}
          >
            <a
              // onKeyDown={(e) => keyModify(e, "down")}
              // onKeyUp={(e) => keyModify(e, "up")}
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
