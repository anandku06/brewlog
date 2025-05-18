import React from "react";
import { createPortal } from "react-dom";

const Modal = (props) => {
  const { children, handleCloseModal } = props;

  return createPortal(
    <div className="modal-container">
      <button onClick={handleCloseModal} className="modal-underlay" />
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
