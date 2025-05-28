"use client";

import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import useViewportObserver from "@/hook/useViewportObserver";
import useViewportStore from "@/store/useViewportStore";
import useHeaderShadowOnScroll from "@/hook/useHeaderShadowOnScroll";
import SideMenu from "../SideMenu";

import styles from "./index.module.scss";

const Header = (): JSX.Element => {
  useViewportObserver();
  const { viewport } = useViewportStore();

  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

  const headerComponentRef = useRef<HTMLElement | null>(null);

  useHeaderShadowOnScroll(headerComponentRef);

  /**
   * 모달이 열려있을 시, 모달의 외부영역에서 mousedown 이벤트 발생 시 click 이벤트와의 중복 호출을 막기 위한 함수
   */

  const handlePreventMousedownEvent = (e: MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
  };

  const handleClickmenuIconWrapper = (e: MouseEvent<HTMLLIElement>): void => {
    e.stopPropagation();

    setIsSideMenuOpen((prev: boolean) => !prev);
  };

  return (
    <header ref={headerComponentRef} className={styles["component-container"]}>
      <div className={styles["main"]}>
        <div className={styles["main-banner-wrapper"]}>
          <Link href="/">Essay Tree</Link>
        </div>
        <ul className={styles["icon-box"]}>
          <li>
            <IoSearchOutline
              size={viewport === "mobile" ? 23 : 25}
              color="#7c7c7c"
            />
          </li>
          <li
            onMouseDown={handlePreventMousedownEvent}
            onClick={handleClickmenuIconWrapper}
          >
            <RxHamburgerMenu size={25} color="#7c7c7c" />
          </li>
        </ul>
      </div>
      <div className={`${styles["side-menu-wrapper"]} ${isSideMenuOpen ? styles["--open"] : styles["--close"]}`}
      >
        <SideMenu
          isSideMenuOpen={isSideMenuOpen}
          setIsSideMenuOpen={setIsSideMenuOpen}
        />
      </div>
    </header>
  );
};

export default Header;
