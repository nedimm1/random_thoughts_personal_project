// HomePage.jsx
import InputText from "../components/InputText";
import { useContext } from "react";
import { MyContext } from "../components/MyContext";
import styles from "./Thoughts.module.css";

function HomePage() {
  const { canShow, sCanShow, thought, setThought } = useContext(MyContext);

  function show() {
    sCanShow(true);
  }

  function toggleFavorite(index) {
    setThought((prevThought) => {
      return prevThought.map((item, idx) => {
        if (idx === index) {
          return { ...item, isFavorite: !item.isFavorite };
        }
        return item;
      });
    });
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Write your Random thought here</h1>
      <button className={styles.button} onClick={show}>
        +
      </button>
      {canShow && <InputText />}
      {thought.map((item, index) => (
        <div key={index} className={styles.thoughtItem}>
          <p style={{ color: "black" }}>{item.text}</p>
          <small className={styles.postedTime}>{item.postedTime}</small>
          <button
            className={`${styles.favoriteButton} ${
              item.isFavorite ? styles.active : styles.inactive
            }`}
            onClick={() => {
              toggleFavorite(index);
              console.log(item.isFavorite);
            }}
          >
            ❤
          </button>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
