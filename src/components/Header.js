import { NavLink } from "react-router";

import logoImg from "../assets/logo.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.main__header}>
      <nav className={styles.main__navbar}>
        <img src={logoImg} className={styles.logo__img} alt="Logo" />

        <ul className={styles.nav__middle__links}>
          <li className={styles.nav__list}>
            <NavLink
              className={styles.nav__link}
              style={({ isActive }) => ({
                color: isActive ? "papayawhip" : "white",
              })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={styles.nav__list}>
            <NavLink
              className={styles.nav__link}
              style={({ isActive }) => ({
                color: isActive ? "papayawhip" : "white",
              })}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className={styles.nav__list}>
            <NavLink
              className={styles.nav__link}
              style={({ isActive }) => ({
                color: isActive ? "papayawhip" : "white",
              })}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className={styles.nav__list}>
            <NavLink
              className={styles.nav__link}
              style={({ isActive }) => ({
                color: isActive ? "papayawhip" : "white",
              })}
              to="/registration"
            >
              Registration
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
