import { useState } from "react";
import styles from "./App.module.css";
import EldorLogo from "./assets/eldorErgashev.png";
import StoreList from "./components/StoreList";
import PetStoreForm from "./components/form/PetStoreForm";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = ()=> setIsOpen(false)
  const openModal = ()=> setIsOpen(true)

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <img src={EldorLogo} alt="Logo" className={styles.logo} />
        <button className={styles.plusButton} onClick={openModal}>+</button>
      </div>
      <div className={styles.content}>
        <StoreList />
      </div>

      {isOpen && <PetStoreForm onClose={closeModal} />}
    </div>
  );
}

export default App;
