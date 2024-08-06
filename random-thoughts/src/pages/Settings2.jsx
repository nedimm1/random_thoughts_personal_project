import { useState } from "react";
import styles from "./Settings.module.css";

const Settings2 = ({ toggleDarkMode }) => {
  const [turrnedOn, sTurrnedOn] = useState(false);

  function handleToggle() {
    sTurrnedOn(!turrnedOn);
    toggleDarkMode();
  }

  return (
    <div className={styles.center}>
      <h1>Settings</h1>
      <button onClick={handleToggle}>
        {turrnedOn ? "Turn on Light Mode" : "Turn on Dark Mode"}
      </button>
    </div>
  );
};

export default Settings2;
