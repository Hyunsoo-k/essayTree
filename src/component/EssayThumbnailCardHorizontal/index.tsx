/**
 * no-accfected UI component
 */

import Image from "next/image";

import styles from "./index.module.scss";

interface Props {
  data: any;
};

const EssayThumbnailCardHorizontal = ({ data }: Props): JSX.Element => {
  return (
    <div className={styles["component-container"]}>
      <div className={styles["left"]}>
        <h3>{data.title}</h3>
        <p>{data.content}</p>
        <div className={styles["information"]}>
          <span>{data.writer}</span>
          <span className={styles["dot"]}>·</span>
          <span>{data.createdAt}</span>
          <span className={styles["dot"]}>·</span>
          <span>댓글 0</span>
        </div>
      </div>
      <div className={styles["thumbnial-wrapper"]}>
        <Image src={data.backGroundImageSrc} fill alt=""/>
      </div>
    </div>
  );
};

export default EssayThumbnailCardHorizontal;