import BoxCategory from "../BoxCategory";
import styles from "./index.module.scss";

const BoxCategoryBox = (): JSX.Element => {
  const categoryArray = [
    "일상",
    "여행",
    "음식",
    "건강·운동",
    "도서",
    "사진",
    "영화",
    "동물",
    "식물",
    "음악",
    "역사",
    "경제",
    "IT",
    "미술",
    "연애"
  ];
  
  return (
    <ul className={styles["component-container"]}>
      {categoryArray.map((category: string, index: number) => (
        <li key={index}>
          <BoxCategory category={category} />
        </li>
      ))}
    </ul>
  );
};

export default BoxCategoryBox;