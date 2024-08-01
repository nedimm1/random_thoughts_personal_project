import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.siteName}>Random Thoughts</h1>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.navLinkActive : styles.navLink
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? styles.navLinkActive : styles.navLink
          }
        >
          Favorites
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? styles.navLinkActive : styles.navLink
          }
        >
          Settings
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
