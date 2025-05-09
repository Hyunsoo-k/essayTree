"use client";

import { MouseEvent, useState } from "react";

import EssayThumbnailCard from "../EssayThumbnailCard";

import styles from "./index.module.scss";

interface Props {
  data: any;
};

type SelectedCategoryStateType =
  | "All"
  | "일상"
  | "음식"
  | "예술"
  | "여행"
  | "자기개발";

const ArticleSection = ({ data }: Props): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategoryStateType>("All");

  const handleClickCategory = (e: MouseEvent<HTMLLIElement>): void => {
    const target = e.currentTarget;

    target.textContent
      && setSelectedCategory(target.textContent as SelectedCategoryStateType);
  };

  return(
    <section className={styles["component-container"]}>
      <div className={styles["top"]}>
        <h2>Articles</h2>
        <ul>
          <li
            onClick={handleClickCategory}
            className={`${selectedCategory === "All" ? styles["--selected"] : ""}`}
          >
            All
          </li>
          <li
            onClick={handleClickCategory}
            className={`${selectedCategory === "일상" ? styles["--selected"] : ""}`}
          >
            일상
          </li>
          <li
            onClick={handleClickCategory}
            className={`${selectedCategory === "음식" ? styles["--selected"] : ""}`}
          >
            음식
          </li>
          <li
            onClick={handleClickCategory}
            className={`${selectedCategory === "예술" ? styles["--selected"] : ""}`}
          >
            예술
          </li>
          <li
            onClick={handleClickCategory}
            className={`${selectedCategory === "여행" ? styles["--selected"] : ""}`}
          >
            여행
          </li>
          <li
            onClick={handleClickCategory}
            className={`${selectedCategory === "자기개발" ? styles["--selected"] : ""}`}
          >
            자기개발
          </li>
        </ul>
      </div>
      <div className={styles["article-box"]}>
        {data.map((data: any, index: number) => (
          <EssayThumbnailCard
            key={index}
            data={data}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;