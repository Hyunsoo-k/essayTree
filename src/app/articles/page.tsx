import BoxCategoryBox from "@/component/BoxCategoryBox";

import EssayThumbnailCardbox from "@/component/EssayThumbnailCardBox";

import styles from "./page.module.scss";

const ArticlesPage = (): JSX.Element => {
  return (
    <main className={styles["page-component-container"]}>
      <h1>Articles</h1>
      <div className={styles["BoxCategoryBox-wrapper"]}>
        <BoxCategoryBox />
      </div>
      <div className={styles["boundary-line"]}></div>
      <div className={styles["essay-thumbnail-card-box-wrapper"]}>
        <EssayThumbnailCardbox />
      </div>
    </main>
  );
};

export default ArticlesPage;