const LoginModal = ({ close }) => {
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
          <div className="modal-body text-dark">
            <form>
              <div>
                <label>Name</label>
                <input type="text" className="form-control mb-3 shadow" />
              </div>
              <div>
                <label>Password</label>
                <input type="password" className="form-control mb-3 shadow" />
              </div>
            </form>
          </div>
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

export default LoginModal;
