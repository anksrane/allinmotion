/* Path: src\components\ui\ReactangleLink\ReactangleLink.jsx */

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ReactangleLink.module.css";

function ReactangleLink({ to, text, icon }) {
  return (
    <NavLink to={to} className={styles.cta}>
      <div className={styles.content}>
        <h3 className={styles.text}>{text}</h3>

        <div className={styles.iconWrapper}>
          <span className={styles.icon}>{icon}</span>
        </div>
      </div>
    </NavLink>
  );
}

export default ReactangleLink;