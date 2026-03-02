/* Path: src\components\layout\AwardShowcase\AwardShowcase.jsx */

import React from "react";
import styles from "./AwardShowcase.module.css";

function AwardShowcase({ awards, activeAward, onSelect }) {
  return (
    <div className={styles.showcaseWrapper}>

      {/* LEFT → Award List */}
      <div className={styles.awardsList}>
        {awards.map((award) => (
          <button
            key={award.id}
            className={`${styles.awardButton} ${
              activeAward.id === award.id ? styles.active : ""
            }`}
            onClick={() => onSelect(award)}
          >
            [ {award.title} ]
          </button>
        ))}
      </div>

      {/* MIDDLE → Image */}
      <div className={styles.imageContainer}>
        <img src={activeAward.image} alt={activeAward.title} className={`img-fluid ${activeAward.image}`} />
      </div>

      {/* RIGHT → Details */}
      <div className={styles.detailsContainer}>
        <h3>{activeAward.category}</h3>
        <span>{activeAward.year}</span>
      </div>

    </div>
  );
}

export default AwardShowcase;