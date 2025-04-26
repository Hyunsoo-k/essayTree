"use client"

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import useViewportStore from "@/store/useViewportStore";
import EssayThumbnailCardSkeleton from "../Skeleton/EssayThumbnailCardSkeleton";

import styles from "./index.module.scss";

interface PropsType {
  data: any;
  index: number;
};

const EssayThumbnailCard = ({ data, index }: PropsType): JSX.Element => {
  const [loadComplete, setLoadComplete] = useState<boolean>(false);

  const informationRef = useRef<HTMLDivElement | null>(null);

  const { viewport } = useViewportStore();

  useEffect(() => {
    const informationElement = informationRef.current as HTMLDivElement;
  
    if (!informationElement) {
      return;
    };

    const resizeObserver = new ResizeObserver(() => {
      const h3WrapperElement = informationElement.querySelector(`.${styles["h3-wrapper"]}`) as HTMLDivElement;
      const pElement = informationElement.querySelector("p") as HTMLParagraphElement;
      const smallElement = informationElement.querySelector("small") as HTMLElement;

      if (!h3WrapperElement || !pElement || !smallElement) {
        return;
      };

      const informationHeight = informationElement.offsetHeight;
      const h3Height = h3WrapperElement.offsetHeight;
      const smallHeight = smallElement.offsetHeight;

      const allowedPHeight = informationHeight - h3Height - smallHeight;

      const pFontSize = 13;
      const lineHeight = 1.6;
      const lineClamp = Math.floor(allowedPHeight / (pFontSize * lineHeight));

        pElement.style.setProperty("display", "-webkit-box");
        pElement.style.setProperty("-webkit-box-orient", "vertical");
        pElement.style.setProperty("-webkit-line-clamp", String(lineClamp));
        pElement.style.setProperty("overflow", "hidden");
    });

    resizeObserver.observe(informationElement);

    setLoadComplete(true);
  
    return () => resizeObserver.disconnect();
  }, []);

  // if (!loadComplete) {
  //   return (
  //     <EssayThumbnailCardSkeleton index={index} />
  //   );
  // };
  
  return (
    <div
      className={
        `${styles["component-container"]} ${index === 0 || viewport === "mobile" ? styles["main"] : ""}`
      }
      style={{ visibility: loadComplete ? "visible" : "hidden" }}
    >
      <div className={styles["thumbnail-wrapper"]}>
        <Image src={data.backGroundImageSrc} alt="" fill />
      </div>
      <div
        ref={informationRef}
        className={styles["information"]}
      >
        <div className={styles["h3-wrapper"]}>
          <h3>{data.title}</h3>
        </div>
        <div className={styles["p-wrapper"]}>
          <p>{data.content}</p>
        </div>
        <small>{data.createdAt}</small>
      </div>
    </div>
  );
};

export default EssayThumbnailCard;