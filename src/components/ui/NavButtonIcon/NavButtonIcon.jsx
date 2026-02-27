/* Path: src\components\ui\NavButtonIcon\NavButtonIcon.jsx */

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavButton.module.css";

function NavButtonIcon({
  to,
  children,
  icon: Icon,
  className = "",
  variant = "light",
}) {
  return (
    <NavLink to={to} className={`${styles.navButton} ${styles[variant]} ${className}`}>
      <span className={styles.text}>{children}</span>

      {/* Connector */}
      {Icon && <span className={styles.connector} />}

      {/* Icon */}
      {Icon && (
        <span className={styles.iconWrapper}>
          <Icon className={styles.icon} />
        </span>
      )}
    </NavLink>
  );
}

export default NavButtonIcon;