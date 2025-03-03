import React from "react";
import styles from "./StoreList.module.css";
import "remixicon/fonts/remixicon.css";
import BlankCard from "./BlankCard";

const stores = [
  {
    id: "1",
    name: "Store One",
    email: "store1@example.com",
    profileUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "2",
    name: "Store Two",
    email: "store2@example.com",
    profileUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "3",
    name: "Store Three",
    email: "store3@example.com",
    profileUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "4",
    name: "Store Four",
    email: "store4@example.com",
    profileUrl: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const StoreList = () => {
  const handleRemoveClick = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    console.log("Remove store:", id);
  };

  return (
    <div className={styles.storeList}>
      {stores.map((store) => (
        <div key={store.id} className={styles.storeCard}>
          <button className={styles.closeButton} onClick={(e) => handleRemoveClick(store.id, e)}>
            <i className="ri-close-line"></i>
          </button>
          <img src={store.profileUrl} alt={store.name} className={styles.storeImage} />
          <div className={styles.storeInfo}>
            <h3 className={styles.storeName}>{store.name}</h3>
            <p className={styles.storeEmail}>{store.email}</p>
          </div>
        </div>
      ))}
      <BlankCard />
    </div>
  );
};

export default StoreList;
