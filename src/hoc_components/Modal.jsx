import React from "react";

const Modal = ({ close, children }) => {
  // Eger ki bir component's farkli bir component'i prop olarak gonderirsek bu prop olarak gonderilen component children  propu ile erisilebilir.

  return (
    <div className="modal d-block bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              onClick={close}
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-dark"> {children}</div>
          <div className="modal-footer">
            <button
              onClick={close}
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button onClick={close} type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
