import { useState } from "react";
import LoginModal from "./components/LoginModal";
import ThemeModal from "./components/ThemeModal";
import WarningModal from "./components/WarningModal";
import Modal from "./components/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(null);

  //modali kapatir
  const close = () => setIsOpen(null);
  return (
    <div className="p-5">
      <div className="d-flex justify-content-center gap-4 my-4">
        <button onClick={() => setIsOpen("login")} className="bg-success">
          Login
        </button>
        <button onClick={() => setIsOpen("darkmode")} className="bg-primary">
          Choice Theme
        </button>
        <button onClick={() => setIsOpen("warning")} className="bg-warning">
          Warning
        </button>
      </div>

      {/* 1. YONTEM
> Normal componentlar olusturduk.
> Amacimiza ulastik
> Cok fazla Kod tekrari yapildi.
*/}
      {isOpen === "login1" ? (
        <LoginModal close={() => setIsOpen(false)} />
      ) : isOpen === "darkmode1" ? (
        <ThemeModal close={() => setIsOpen(false)} />
      ) : isOpen === "warning1" ? (
        <WarningModal close={() => setIsOpen(false)} />
      ) : (
        ""
      )}

      {/* 2. YONTEM
> Kod tekrarini onlemek icin HOC kullandik.
*/}
      {isOpen === "login" ? (
        <Modal close={close}>
          <div>
            <label>Name</label>
            <input type="text" className="form-control mb-3 shadow" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" className="form-control mb-3 shadow" />
          </div>
        </Modal>
      ) : isOpen === "darkmode" ? (
        <Modal close={close}>
          <h2>Please select you favourite theme!</h2>

          <select className="form-select my-4">
            <option> Dark Mode</option>
            <option> Light Mode</option>
          </select>
        </Modal>
      ) : isOpen === "warning" ? (
        <Modal close={close}>
          <h2> Warning!</h2>
          <p>Error with 404 code</p>
          <p> Please Try Again...</p>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
