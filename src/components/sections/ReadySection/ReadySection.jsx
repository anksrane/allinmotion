/* Path: src\components\sections\ReadySection\ReadySection.jsx */

import React from "react";
import { SideLink } from "../../index";
import styles from "./ReadySection.module.css";

function ReadySection() {
  return (
    <section className={styles.readySection}>
      <div className={`container ${styles.readyContainer}`}>

        {/* Main Content */}
        <div className={styles.contentWrapper}>

          {/* LEFT – Heading */}
          <h1 className={styles.heading}>
            Ready to <br />
            <i>Work</i> <br />
            <span>together?</span>
          </h1>

          {/* CENTER – Circle Button */}
          <div className={styles.circleWrapper}>
            <button className={styles.circleBtn}>
              calculate <br /> project cost
            </button>
          </div>

          <SideLink className={styles.sideLinkContact} to="/contact">contact us</SideLink>

        </div>

      </div>
    </section>
  );
}

export default ReadySection;