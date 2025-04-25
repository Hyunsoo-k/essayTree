"use client"

import useViewportStore from "@/store/useViewportStore";

import styles from "./index.module.scss";

interface Props {
  index: number;
};

const EssayThumbnailCardSkeleton = ({ index }: Props): JSX.Element => {
  const { viewport } = useViewportStore();

  return (
    <div
    className={
      `${styles["component-container"]} ${index === 0 || viewport === "mobile" ? styles["main"] : ""}`
    }
    >
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