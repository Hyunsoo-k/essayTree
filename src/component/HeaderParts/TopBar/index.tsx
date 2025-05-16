import Link from "next/link";
import styles from "./index.module.scss";

const TopBar = (): JSX.Element => {
  return (
    <div className={styles["component-container"]}>
      <ul>
        <li>
          <Link href="/">Contact us</Link>
        </li>
        <li>
          <Link href="/">Help</Link>
        </li>
      </ul>
    </div>
  );
};

export default TopBar;