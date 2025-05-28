"use client";

import Link from "next/link";
import { MouseEvent, useRef, useState } from "react";

import { PiArrowLeftThin } from "react-icons/pi";
import { PiArrowRightThin } from "react-icons/pi";

import useViewportObserver from "@/hook/useViewportObserver";
import useViewportStore from "@/store/useViewportStore";
import { mockData } from "@/mockData/essayThumbnailMocakData";
import HeroSection from "@/component/HeroSection";
import EssayThumbnailCardMain from "@/component/EssayThumbnailCardMain";
import EssayThumbnailCardVertical from "@/component/EssayThumbnailCardVertical";

import styles from "./page.module.scss";

export default function Home(): JSX.Element {
  useViewportObserver();
  const { viewport } = useViewportStore();

  /**
   * eaasy-thumbnail-card-main-section
   */

  const isAnimating = useRef<boolean>(false);
  const eaasyThumbnailCardMainBoxWrapperRef = useRef<HTMLDivElement | null>(null);
  const eaasyThumbnailCardMainBoxRef = useRef<HTMLDivElement | null>(null);

  const handleClickLeftArrow = (): void => {
    const wrapperElement = eaasyThumbnailCardMainBoxWrapperRef.current;
    const boxElement = eaasyThumbnailCardMainBoxRef.current

    if (
      !wrapperElement ||
      !boxElement ||
      isAnimating.current
    ) {
      return;
    };

    const firstChildElement = boxElement.firstElementChild as HTMLElement;
    const scrollDistance = firstChildElement.getBoundingClientRect().width;
    
    wrapperElement.scrollBy({
      left: -scrollDistance,
      behavior: 'smooth',
    });

    isAnimating.current = true;

    setTimeout(() => {
      isAnimating.current = false;
    }, 500);
  };

  const handleClickRightArrow = (): void => {
    const wrapperElement = eaasyThumbnailCardMainBoxWrapperRef.current;
    const boxElement = eaasyThumbnailCardMainBoxRef.current

    if (
      !wrapperElement ||
      !boxElement ||
      isAnimating.current
    ) {
      return;
    };

    const firstChildElement = boxElement.firstElementChild as HTMLElement;
    const scrollDistance = firstChildElement.getBoundingClientRect().width;
    
    wrapperElement.scrollBy({
      left: scrollDistance,
      behavior: 'smooth',
    });

    isAnimating.current = true;

    setTimeout(() => {
      isAnimating.current = false;
    }, 500);
  };

  return (
    <main className={styles["page-component"]}>
      <HeroSection />
      <section className={styles["eaasy-thumbnail-card-main-section"]}>
        <div className={styles["left-arrow-wrapper"]}>
          <PiArrowLeftThin
            onClick={handleClickLeftArrow}
            size={viewport === "mobile" ? 40 : 70}
          />
        </div>
        <div
          ref={eaasyThumbnailCardMainBoxWrapperRef}
          className={styles["eaasy-thumbnail-card-main-box-wrapper"]}
        >
          <div
            ref={eaasyThumbnailCardMainBoxRef}
            className={styles["eaasy-thumbnail-card-main-box"]}
          >
            {mockData.slice(0, 9).map((data: any, index: number) => (
              <EssayThumbnailCardMain
                key={index}
                data={data}
              />
            ))}
          </div>
        </div>
        <div className={styles["right-arrow-wrapper"]}>
          <PiArrowRightThin
            onClick={handleClickRightArrow}
            size={viewport === "mobile" ? 40 : 70}
          />
        </div>
      </section>
      <div className={styles["boundary-line"]}></div>
      <section className={styles["essay-thumbnail-card-vertical-section"]}>
        <div className={styles["top"]}>
          <h2>
            <Link href="/articles">Articles</Link>
          </h2>
        </div>
        <div className={styles["article-box"]}>
          {mockData.map((data: any, index: number) => (
            <EssayThumbnailCardVertical
              key={index}
              data={data}
            />
          ))}
        </div>
        <Link href="/articles">
          View more
          <PiArrowRightThin size={25} />
        </Link>
      </section>
      <div className={styles["boundary-line"]}></div>
    </main>
  );
};
