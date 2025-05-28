import categoryArray from "@/variable/categoryArray";
import BoxCategory from "@/component/BoxCategory";

import styles from "./index.module.scss";

const BoxCategoryBox = (): JSX.Element => {
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