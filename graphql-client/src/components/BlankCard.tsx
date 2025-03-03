import { useState } from "react";
import styles from "./StoreList.module.css";
import PetStoreForm from "./form/PetStoreForm";

const BlankCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <div className={`${styles.storeCard} ${styles.addCard}`}>
        <div className={styles.addContainer}>
          <button className={styles.addButton} onClick={openModal}>
            <i className="ri-add-line"></i>
          </button>
        </div>
      </div>
      {isOpen && <PetStoreForm onClose={closeModal} />}
    </>
  );
};

export default BlankCard;
