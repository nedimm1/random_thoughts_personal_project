import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import { MyContext } from "../components/MyContext";

const Header = () => {
  const { language } = useContext(MyContext);
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.siteName}>
        {language === "en"
          ? "Random Thoughts"
          : language === "sr"
          ? "Random Misli"
          : "أفكار عشوائية"}
      </h1>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.navLinkActive : styles.navLink
          }
        >
          {language === "en"
            ? "Home"
            : language === "sr"
            ? "Glavna stranica"
            : "الصفحة الرئيسية"}
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? styles.navLinkActive : styles.navLink
          }
        >
          {language === "en"
            ? "Favorites"
            : language === "sr"
            ? "Omiljeni"
            : "المفضلة"}
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? styles.navLinkActive : styles.navLink
          }
        >
          {language === "en"
            ? "Settings"
            : language === "sr"
            ? "Podesavanja"
            : "إعدادات"}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
