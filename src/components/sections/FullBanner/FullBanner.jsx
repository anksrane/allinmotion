/* Path: src\components\sections\FullBanner\FullBanner.jsx */

import React, { forwardRef } from "react";
import styles from "./FullBanner.module.css";

const FullBanner = forwardRef((props, ref) => {
  return (
    <section ref={ref} className={styles.fullBannerOuterContainer}>
      <div className={styles.fullBannerInner}>
      </div>
    </section>
  );
});

export default FullBanner;