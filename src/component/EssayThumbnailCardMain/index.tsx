import styles from "./index.module.scss";

interface PropsType {
  data: any;
};

const EssayThumbnailCardMain = ({ data }: PropsType): JSX.Element => {
  return(
    <div className={styles["component-container"]}>
      <div
        className={styles["background-image-wrapper"]}
        style={{
          backgroundImage: `url(${data.backGroundImageSrc})`
        }}
      ></div>
      <div className={styles["information"]}>
        <h3>{data.title}</h3>
        <span className={styles["content"]}>{data.content}</span>
        <span className={styles["writer"]}>
          <span className={styles["by"]}>by </span>
          {data.writer}
        </span>
      </div>
    </div>
  );
};

export default EssayThumbnailCardMain