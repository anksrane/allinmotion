/* Path: src\components\ui\SideLink\SideLink.jsx */

import React from "react";
import { NavLink } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import styles from "./SideLink.module.css";

function SideLink({ to, children, showIcon = true, className="" }) {
  return (
    <NavLink to={to} className={`${styles.sideLink} ${className}`}>
      {showIcon && <FaCaretRight className={styles.icon} />}
      {children}
    </NavLink>
  );
}

export default SideLink;