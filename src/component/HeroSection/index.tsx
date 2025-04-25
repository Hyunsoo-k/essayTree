"use client"

import { useState, useRef, useEffect } from "react";

import styles from "./index.module.scss";

const HeroSection = (): JSX.Element => {
  const h1TagRef = useRef<HTMLHeadingElement | null>(null);
  const pTagRef = useRef<HTMLParagraphElement | null>(null);


  useEffect(() => {
    setTimeout(() => {
      if (pTagRef.current) {
        pTagRef.current.classList.remove(styles["before"]);
        pTagRef.current.classList.add(styles["after"]);
      }
    }, 2000);

  }, []);

  return(
    <section
      className={styles["component-container"]}
      style={{
        backgroundImage: `url(/image/sunsetImage.jpg)`
      }}
    >
      <div className={styles["content"]}>
        <h1 ref={h1TagRef}>
          Open Magazine
          <img src="/image/circleText.svg" />
        </h1>
        <p ref={pTagRef}>
          누군가의 작은 생각이<br />
          누군가에게 큰 울림이 되는 공간.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;