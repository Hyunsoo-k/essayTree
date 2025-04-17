"use client"

import { useState, useRef, useEffect } from "react";

import styles from "./index.module.scss";

const HeroSection = (): JSX.Element => {
  const h1TagRef = useRef<HTMLHeadingElement | null>(null);
  const pTagRef = useRef<HTMLParagraphElement | null>(null);


  useEffect(() => {
    setTimeout(() => {
      if (h1TagRef.current) {
        h1TagRef.current.classList.remove(styles["before"]);
        h1TagRef.current.classList.add(styles["after"]);
      }
    }, 800);

    setTimeout(() => {
      if (pTagRef.current) {
        pTagRef.current.classList.remove(styles["before"]);
        pTagRef.current.classList.add(styles["after"]);
      }
    }, 2000);

  }, []);

  return(
    <section className={styles["component-container"]}>
      <div className={styles["content"]}>
        <h1
          ref={h1TagRef}
          className={styles["before"]}
        >
          Open Magazine
        </h1>
        <p
          ref={pTagRef}
          className={styles["before"]}
        >
          누군가의 작은 생각이 누군가에게 큰 울림이 되는 공간입니다.
          당신의 경험, 생각, 기억을 에세이로 남겨보세요.
          모두가 함께 읽고 공감합니다.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;