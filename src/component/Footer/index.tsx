import styles from "./index.module.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles["component-container"]}>
      <div className={styles["item-box"]}>
        <h1>
          Essay Tree
        </h1>
        <ul>
          <li>공지사항</li>
          <li>사이트 소개</li>
          <li>이용안내</li>
          <li>고객센터</li>
        </ul>
      </div>
      <div className={styles["bottom"]}>open magazine</div>
    </footer>
  );
};

export default Footer;