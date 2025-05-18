import styles from "./index.module.scss";

interface Props {
  category: string;
};

const BoxCategory = ({ category }: Props): JSX.Element => {
  return (
    <div className={styles["component-container"]}>
      {category}
    </div>
  );
};

export default BoxCategory;