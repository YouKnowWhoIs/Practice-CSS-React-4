import { useState } from "react";
import "../../style/modal/modal.css";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div id="modal">
        <button type="button" onClick={handleOpenModal} className="openBtn">
          Відкрити модальне вікно
        </button>

        {isOpen && (
          <div className="modalConteiner" onClick={handleCloseModal}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={handleCloseModal}
                className="closeBtn"
              >
                Закрити модальне вікно
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Modal;
