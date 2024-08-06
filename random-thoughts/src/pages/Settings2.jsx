import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../components/MyContext";
import styles from "./Settings.module.css";

const Settings2 = ({ toggleDarkMode }) => {
  const [turrnedOn, sTurrnedOn] = useState(false);
  const { language, changeLanguage } = useContext(MyContext);

  function handleToggle() {
    sTurrnedOn(!turrnedOn);
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
      <button onClick={handleToggle}>
        {turrnedOn ? "Turn on Light Mode" : "Turn on Dark Mode"}
      </button>

      <div>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("sr")}>Serbian</button>
        <button onClick={() => changeLanguage("ar")}>Arabic</button>
      </div>
    </div>
  );
};

export default Settings2;
