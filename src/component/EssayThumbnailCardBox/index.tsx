import { mockData } from "@/mockData/essayThumbnailMocakData";

import EssayThumbnailCardHorizontal from "../EssayThumbnailCardHorizontal";

import styles from "./index.module.scss";

const EssayThumbnailCardbox = (): JSX.Element => {
  
  return (
    <ul className={styles["component-container"]}>
      {mockData.map((data: any, index: number) => (
        <li key={index}>
          <EssayThumbnailCardHorizontal data={data} />
        </li>
      ))}
    </ul>
  );
};

export default EssayThumbnailCardbox