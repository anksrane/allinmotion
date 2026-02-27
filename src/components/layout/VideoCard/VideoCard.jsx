/* Path: src\components\layout\VideoCard\VideoCard.jsx */

import React, { useState } from "react";
import styles from "./VideoCard.module.css";

function VideoCard({
  image,
  title,
  tags=[],
  youtubeUrl,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const getEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={`img-fluid ${styles.image}`} />

          <div className={styles.overlay}
            onClick={() => setIsOpen(true)}
            >
            <button
              className={styles.playButton}
            >
              ▶
            </button>
          </div>
            {tags.length > 0 && (
            <div className={styles.tags}>
                {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                    {tag}
                </span>
                ))}
            </div>
            )}          
        </div>

        <div className={styles.textContent}>
          {title && <h3 className={styles.title}>{title}</h3>}
        </div>
      </div>

      {isOpen && (
        <div className={styles.lightbox} onClick={() => setIsOpen(false)}>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.close}
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <iframe
              src={getEmbedUrl(youtubeUrl)}
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

export default VideoCard;