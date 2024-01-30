import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import IconButton from "./IconButton";

/**
 * ModalProps defines the props for the Modal component.
 */
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

/**
 * Modal is a component that displays content in a modal dialog.
 *
 * @param isOpen - Indicates whether the modal is open.
 * @param onClose - Callback to close the modal.
 * @param children - Content to be displayed in the modal.
 */
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const updateModalSize = () => {
      if (modalRef.current) {
        const contentElement = modalRef.current.querySelector(".modal-content");

        if (contentElement) {
          const contentWidth = contentElement.clientWidth;
          const contentHeight = contentElement.clientHeight;

          modalRef.current.style.width = `${contentWidth}px`;
          modalRef.current.style.height = `${contentHeight}px`;
        }
      }
    };

    if (isOpen) {
      updateModalSize();
      window.addEventListener("resize", updateModalSize);
    }

    return () => {
      window.removeEventListener("resize", updateModalSize);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 md:overflow-y-auto scrollbar-hide">
      <div
        ref={modalRef}
        className="modal-container rounded-lg mx-auto my-10 transform transition-all duration-300 ease-in-out"
      >
        <div className="modal-content">
          {children}
          <IconButton
            icon={<FontAwesomeIcon icon={faCircleXmark} size="2x" />}
            color="dark"
            className="modal-close w-7 h-7 absolute top-4 right-4"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
