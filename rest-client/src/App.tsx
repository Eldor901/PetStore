import { useState } from "react";
import styles from "./App.module.css";
import EldorLogo from "./assets/eldorErgashev.png";
import StoreList from "./components/StoreList";
import PetStoreForm from "./components/form/PetStoreForm";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <img src={EldorLogo} alt="Logo" className={styles.logo} />
        <button className={styles.plusButton} onClick={openModal}>
          +
        </button>
      </header>
      <main className={styles.content}>
        <StoreList />
      </main>
      {isOpen && <PetStoreForm onClose={closeModal} />}
    </div>
  );
}

export default App;
