import "./Modal.css";

const Modal = ({showModal, setShowModal}) => {
  return (
    <div className={showModal ? "modal active" : "modal"}>
      <nav>
        <ul className="flex-center">
          <li>
            <a onClick={() => setShowModal(false)} href="#top">TOP</a>
          </li>
          <li>
            <a onClick={() => setShowModal(false)} href="/">LAST MINUTE</a>
          </li>
          <li>
            <a onClick={() => setShowModal(false)} href="#academy">ACADEMY</a>
          </li>
          <li>
            <a onClick={() => setShowModal(false)} href="#comments">COMMENTS</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Modal;
