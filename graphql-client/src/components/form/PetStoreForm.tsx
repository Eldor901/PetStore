import React, { useRef } from "react";
import styles from "./PetStoreForm.module.css";
import Modal from "../Modal/Modal";

interface PetStoreFormProps {
  onClose: () => void;
}

const PetStoreForm: React.FC<PetStoreFormProps> = ({ onClose }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries()) as { [key: string]: string };
      console.log(data);
      onClose();
    }
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <h2 className={styles.title}>Add Pet Store</h2>
      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        {/* Name Field */}
        <div className={styles.inputGroup}>
          <input type="text" name="name" required className={styles.input} />
          <label className={styles.label}>Name</label>
        </div>

        {/* Email Field */}
        <div className={styles.inputGroup}>
          <input type="email" name="email" required className={styles.input} />
          <label className={styles.label}>Email</label>
        </div>

        {/* Profile URL Field */}
        <div className={styles.inputGroup}>
          <input type="url" name="profileUrl" required className={styles.input} />
          <label className={styles.label}>Profile URL</label>
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>Submit</button>
          <button type="button" className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default PetStoreForm;
