import Image from "next/image";
import Link from "next/link";

import { mockData } from "@/mockData/essayThumbnailMocakData";

import styles from "./page.module.scss";

const NotificationPage = (): JSX.Element => {
  return (
    <div className={styles["page-component"]}>
      <h2>알림</h2>
      <ul>
        {mockData.map((data: any, index: number ) => (
          <li key={index} className={styles["notification"]}>
            <div className={styles["profile-image-wrapper"]}>
              <Image src="/image/mockImage2.jpg" fill alt=""/>
            </div>
            <div className={styles["content-wrapper"]}>
              <Link href="">{data.content}</Link>
            </div>
            <div className={styles["created-at-wrapper"]}>
              <small>{data.createdAt}</small>
            </div>
            <div className={styles["new-icon"]}>N</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPage;