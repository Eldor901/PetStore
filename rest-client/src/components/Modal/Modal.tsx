import React from "react";
import ReactComponentModal from "react-modal";
import styles from "./Modal.module.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalComponent = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <ReactComponentModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      {children}
    </ReactComponentModal>
  );
};

export default ModalComponent;
