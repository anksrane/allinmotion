/* Path: src\components\sections\AnimationImageLayer\AnimationImageLayer.jsx */

import { forwardRef } from "react";
import {heroImage} from "../../../assets/index";
import styles from "./AnimationImageLayer.module.css";

const AnimationImageLayer = forwardRef((props, ref) => {
  return (
    <div className={styles.AnimationImageLayer}>
      <img
        ref={ref}
        src={heroImage}
        alt="Floating Visual"
        className={styles.floatingImage}
      />
    </div>
  );
});

export default AnimationImageLayer;