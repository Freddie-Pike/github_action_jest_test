import React, { useState } from "react";
import { render } from "react-dom";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="main-page-wrapper">
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Show a cool modal!
      </button>
      <Modal show={showModal} onClickOutside={() => setShowModal(false)}>
        Close the modal by clicking outside of the modal : )
      </Modal>
    </div>
  );
}

render(<App />, document.getElementById("root"));
