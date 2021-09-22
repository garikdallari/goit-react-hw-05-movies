import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav>
      <NavLink
        className={styles.link}
        activeClassName={styles.activeLink}
        exact
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={styles.link}
        activeClassName={styles.activeLink}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
