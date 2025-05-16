"use client";

import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RiAccountBoxLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

import useViewportObserver from "@/hook/useViewportObserver";
import useViewportStore from "@/store/useViewportStore";
import useHeaderShadowOnScroll from "@/hook/useHeaderShadowOnScroll";
import TopBar from "../HeaderParts/TopBar";
import ProfileModal from "../Modal/ProfileModal";
import HeaderMenuDropdown from "../HeaderParts/HeaderMenuDropdown";

import styles from "./index.module.scss";

const Header = (): JSX.Element => {
  useViewportObserver();
  const { viewport } = useViewportStore();

  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState<boolean>(false);

  const headerComponentRef = useRef<HTMLElement | null>(null);

  useHeaderShadowOnScroll(headerComponentRef);

  /**
   * 모달이 열려있을 시, 모달의 외부영역에서 mousedown 이벤트 발생 시 click 이벤트와의 중복 호출을 막기 위한 함수
   */

  const handlePreventMousedownEvent = (e: MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
  };

  const handleClickProfileIconWrapper = (e: MouseEvent<HTMLElement>): void => {
    e.stopPropagation();

    setIsProfileModalOpen((prev: boolean) => !prev);
  };

  const handleClickmenuIconWrapper = (e: MouseEvent<HTMLLIElement>): void => {
    e.stopPropagation();

    setIsMenuDropdownOpen((prev: boolean) => !prev);
  };

  return (
    <header ref={headerComponentRef} className={styles["component-container"]}>
      {viewport !== "mobile" && <TopBar />}
      <div className={styles["main"]}>
        <h1>Essay tree</h1>
        {viewport !== "mobile" && (
          <nav>
            <ul>
              <li>
                <Link href="/">Notice</Link>
              </li>
              <li>
                <Link href="/">Guide</Link>
              </li>
              <li>
                <Link href="/">Articles</Link>
              </li>
              <li>
                <Link href="/">Athors</Link>
              </li>
            </ul>
          </nav>
        )}
        <ul className={styles["icon-box"]}>
          <li>
            <IoSearchOutline
              size={viewport === "mobile" ? 23 : 25}
              color="#7c7c7c"
            />
          </li>
          <li
            onMouseDown={handlePreventMousedownEvent}
            onClick={handleClickProfileIconWrapper}
          >
            <RiAccountBoxLine
              size={viewport === "mobile" ? 23 : 25}
              color="#7c7c7c"
            />
          </li>
          {viewport === "mobile" ? (
            <li
              onMouseDown={handlePreventMousedownEvent}
              onClick={handleClickmenuIconWrapper}
            >
              <RxHamburgerMenu size={25} color="#7c7c7c" />
            </li>
          ) : (
            <li>
              <button type="button">Post Essay</button>
            </li>
          )}
        </ul>
        {isProfileModalOpen && (
          <div className={styles["profile-modal-wrapper"]}>
            <ProfileModal
              isProfileModalOpen={isProfileModalOpen}
              setIsProfileModalOpen={setIsProfileModalOpen}
            />
          </div>
        )}
      </div>
      {viewport === "mobile" && (
        <HeaderMenuDropdown
          isMenuDropdownOpen={isMenuDropdownOpen}
          setIsMenuDropdownOpen={setIsMenuDropdownOpen}
        />
      )}
    </header>
  );
};

export default Header;
