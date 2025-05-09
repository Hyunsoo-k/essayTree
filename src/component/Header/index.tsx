"use client"

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import useViewportObserver from "@/hook/useViewportObserver";
import { IoSearchOutline } from "react-icons/io5";
import { RiAccountBoxLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

import useViewportStore from "@/store/useViewportStore";

import styles from "./index.module.scss";

const Header = ():JSX.Element => {
  useViewportObserver();

  const { viewport } = useViewportStore();

  const [locatedTop, setLocatedTop] = useState<boolean>(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const hamburgerWrapperRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setLocatedTop(true);
      } else {
        setLocatedTop(false);
      };
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: globalThis.MouseEvent) => {
      const targetNode = e.target as Node;

      if (hamburgerWrapperRef.current?.contains(targetNode)) {
        return;
      };

      if (!dropdownRef.current?.contains(targetNode)) {
        setIsDropdownOpen(false);
      };
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickHamburger = (): void => {
    setIsDropdownOpen((prev) => !prev);
  };

  return(
    <header className={
      `${styles["component-container"]} ${locatedTop ? styles["located-top"] : styles["located-no-top"]}`
    }>
      {viewport !== "mobile" && (
        <>
          <div className={styles["top"]}>
          <ul>
            <li>
              <Link href="/">Contact us</Link>
            </li>
            <li>
              <Link href="/">Help</Link>
            </li>
          </ul>
          </div>
          <div className={styles["boundary-line"]}></div>
        </>
      )}
      <div className={styles["main"]}>
        <h1>Essay tree</h1>
        {viewport === "mobile" && (
          <div className={styles["interection-box--mobile"]}>
            <IoSearchOutline
              size={23}
              color="#7c7c7c"
            />
            <RiAccountBoxLine
              size={25}
              color="#7c7c7c"
            />
            <div ref={hamburgerWrapperRef}>
              <RxHamburgerMenu
                size={25}
                color="#7c7c7c"
                onClick={handleClickHamburger}
              />
            </div>
          </div>
        )}
        {viewport !== "mobile" && (
          <>
            <ul className={styles["navigation-bar"]}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Notice</Link>
              </li>
              <li>
                <Link href="/">Guide</Link>
              </li>
              <li>
                <Link href="/">Articles</Link>
              </li>
            </ul>
            <div className={styles["interection-box--tablet"]}>
              <IoSearchOutline
                size={25}
                color="#7c7c7c"
              />
              <RiAccountBoxLine
                size={25}
                color="#7c7c7c"
              />
              <button type="button">Post Essay</button>
            </div>
          </>
        )}
      </div>
      {viewport === "mobile" && (
          <ul className={`${styles["drop-down--mobile"]} ${isDropdownOpen ? styles["drop-down--open"] : styles["drop-down--close"]}`}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Notice</Link>
            </li>
            <li>
              <Link href="/">Guide</Link>
            </li>
            <li>
              <Link href="/">Articles</Link>
            </li>
          </ul>
        )}
    </header>
  );
};

export default Header;