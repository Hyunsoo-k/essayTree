import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// import EssayThumbnailCardSkeleton from "../Skeleton/EssayThumbnailCardSkeleton";

import styles from "./index.module.scss";

interface Props {
  data: any;
};

const EssayThumbnailCardVertical = ({ data }: Props): JSX.Element => {
  const [loadComplete, setLoadComplete] = useState<boolean>(true);

  const informationRef = useRef<HTMLDivElement | null>(null);
  const h3Ref = useRef<HTMLDivElement | null>(null);
  const pRef = useRef<HTMLParagraphElement | null>(null);
  const smallBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const informationElement = informationRef.current as HTMLDivElement;
    const h3Element = h3Ref.current as HTMLDivElement;
    const pElement = pRef.current as HTMLParagraphElement;
    const smallBoxElement = smallBoxRef.current as HTMLDivElement;
  
    if (
      !informationElement
      || !h3Element
      || !pElement
      || !smallBoxElement
    ) {
      return;
    };

    const resizeObserver = new ResizeObserver(() => {
      const informationHeight = informationElement.offsetHeight;
      const h3Height = h3Element.offsetHeight + 25; // 25 : margin-top + margin-bottom
      const smallBoxHeight = smallBoxElement.offsetHeight;

      const allowedPHeight = informationHeight - h3Height - smallBoxHeight;

      const pFontSize = 12;
      const lineHeight = 1.6;
      const lineClamp = Math.floor(allowedPHeight / (pFontSize * lineHeight));

      pElement.style.setProperty("-webkit-line-clamp", String(lineClamp));
    });

    resizeObserver.observe(informationElement);

    setLoadComplete(true);
  
    return () => resizeObserver.disconnect();
  }, []);

  // if (!loadComplete) {
  //   return <EssayThumbnailCardSkeleton />
  // };
  
  return (
    <div className={styles["component-container"]}>
      <div className={styles["thumbnail-wrapper"]}>
        <Image src={data.backGroundImageSrc} alt="" fill />
      </div>
      <div
        ref={informationRef}
        className={styles["information"]}
      >
        <h3 ref={h3Ref}>
          {data.title}
        </h3>
        <p ref={pRef}>{data.content}</p>
        <div
          ref={smallBoxRef}
          className={styles["small-box"]}
        >
          <small className={styles["created-at"]}>{data.createdAt}</small>
          <small>
            <span>by </span>
            {data.writer}
          </small>  
        </div>
      </div>
    </div>
  );
};

export default EssayThumbnailCardVertical;