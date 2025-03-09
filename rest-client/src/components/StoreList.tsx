import React from "react";
import styles from "./StoreList.module.css";
import "remixicon/fonts/remixicon.css";
import BlankCard from "./BlankCard";

interface Store {
  id: string;
  name: string;
  email: string;
  profileUrl: string;
  catsLength?: number;
  dogsLength?: number;
}

const stores: Store[] = [
  {
    id: "1",
    name: "Store One",
    email: "store1@example.com",
    profileUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    catsLength: 12,
    dogsLength: 24,
  },
  {
    id: "2",
    name: "Store Two",
    email: "store2@example.com",
    profileUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    catsLength: 11,
    dogsLength: 13,
  },
  {
    id: "3",
    name: "Store Three",
    email: "store3@example.com",
    profileUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    catsLength: 32,
    dogsLength: 12,
  },
  {
    id: "4",
    name: "Store Four",
    email: "store4@example.com",
    profileUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    catsLength: 23,
    dogsLength: 13,
  },
];

const StoreList: React.FC = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 10);

  const updatedStores = stores.map((store) => {
    const cats = store.catsLength !== undefined ? store.catsLength : getRandomNumber();
    const dogs = store.dogsLength !== undefined ? store.dogsLength : getRandomNumber();
    return { ...store, catsLength: cats, dogsLength: dogs };
  });

  const handleRemoveClick = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    console.log("Remove store:", id);
  };

  return (
    <>
      <div className={styles.storeList}>
        {updatedStores.map((store) => (
          <div key={store.id} className={styles.storeCard}>
            <button className={styles.closeButton} onClick={(e) => handleRemoveClick(store.id, e)}>
              <i className="ri-close-line"></i>
            </button>
            <img src={store.profileUrl} alt={store.name} className={styles.storeImage} />
            <div className={styles.storeInfo}>
              <h3 className={styles.storeName}>{store.name}</h3>
              <p className={styles.storeEmail}>{store.email}</p>
              <p className={styles.storeLength}>
                Cats: {store.catsLength} | Dogs: {store.dogsLength}
              </p>
            </div>
          </div>
        ))}
        <BlankCard />
      </div>
    </>
  );
};

export default StoreList;
