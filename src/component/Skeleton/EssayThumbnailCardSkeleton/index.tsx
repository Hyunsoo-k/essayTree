"use client"

import styles from "./index.module.scss";

const EssayThumbnailCardSkeleton = (): JSX.Element => {

  return (
    <div className={styles["component-container"]}>
      <div className={styles["thumbnail-wrapper"]}></div>
      <div className={styles["information"]}>
        <h3></h3>
        <p></p>
        <small></small>
      </div>
    </div>
  );
};

export default EssayThumbnailCardSkeleton;