import React, { useEffect, useRef } from "react";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IconButton from "./IconButton";
import Heading3 from "../layout/Heading3";

/**
 * ModalProps defines the props for the Modal component.
 */
interface Props {
  title?: string;
  text?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

/**
 * Modal is a component that displays content in a modal dialog.
 */
const Modal = ({ title, text, children, isOpen, onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

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
    <div className="fixed inset-0 z-[1100]">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          ref={modalRef}
          className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 overflow-y-auto max-h-[80vh] scrollbar-hide">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <Heading3
                  id="modal-headline"
                  text={title}
                  className="lg:text-3xl leading-6"
                />
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{text}</p>
                </div>
              </div>
            </div>
            <div className="modal-content">{children}</div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <IconButton
              icon={<FontAwesomeIcon icon={faCircleXmark} size="2x" />}
              color="dutch"
              onClick={onClose}
              className="modal-close mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff4f00] sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
