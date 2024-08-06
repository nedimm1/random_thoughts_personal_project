import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../components/MyContext";
import styles from "./Settings.module.css";

const Settings2 = ({ toggleDarkMode }) => {
  const [turnedOn, setTurnedOn] = useState(false);
  const { language, changeLanguage } = useContext(MyContext);

  function handleToggle() {
    setTurnedOn(!turnedOn);
    toggleDarkMode();
  }

  return (
    <div className={styles.center}>
      <h1>
        {language === "en"
          ? "Settings"
          : language === "sr"
          ? "Podesavanja"
          : "إعدادات"}
      </h1>
      <button
        className={`${styles.button} ${styles.themeButton} ${
          turnedOn ? styles.active : ""
        }`}
        onClick={handleToggle}
      >
        {turnedOn ? "Turn on Light Mode" : "Turn on Dark Mode"}
      </button>

      <div>
        <h2>
          {language === "en"
            ? "Language Settings"
            : language === "sr"
            ? "Jezici"
            : "اللغات"}
        </h2>
        <button
          className={`${styles.button} ${
            language === "en" ? styles.activeEnglish : ""
          }`}
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
        <button
          className={`${styles.button} ${
            language === "sr" ? styles.activeSerbian : ""
          }`}
          onClick={() => changeLanguage("sr")}
        >
          Serbian
        </button>
        <button
          className={`${styles.button} ${
            language === "ar" ? styles.activeArabic : ""
          }`}
          onClick={() => changeLanguage("ar")}
        >
          Arabic
        </button>
      </div>
    </div>
  );
};

export default Settings2;
