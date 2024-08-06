// Favorites2.jsx
import { useContext } from "react";
import { MyContext } from "../components/MyContext";
import styles from "./Thoughts.module.css";

function Favorites2() {
  const { thought, setThought, language } = useContext(MyContext);

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
      <h1 className={styles.heading}>
        {language === "en"
          ? "Favorites"
          : language === "sr"
          ? "Omiljeni"
          : "المفضلة"}
      </h1>
      {thought
        .filter((item) => item.isFavorite)
        .map((item, index) => (
          <div key={index} className={styles.thoughtItem}>
            <p style={{ color: "black" }}>{item.text}</p>
            <small className={styles.postedTime}>{item.postedTime}</small>
            <button
              className={`${styles.favoriteButton} ${styles.active}`}
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

export default Favorites2;
