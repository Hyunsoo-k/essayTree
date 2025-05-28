import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useRef, useEffect } from "react";
import { PiBellThin } from "react-icons/pi";
import { BsFeather } from "react-icons/bs";

import { mockData } from "@/mockData/essayThumbnailMocakData";
import useHandleMouseEventOutSide from "@/hook/useHandleMouseEventOutSide";

import styles from "./index.module.scss";

interface Props {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const SideMenu = ({
  isSideMenuOpen,
  setIsSideMenuOpen
}: Props): JSX.Element => {
  const pathname = usePathname();

  const sideMenuRef = useRef<HTMLDivElement | null>(null);

  /**
   * url 변경 시 컴포넌트 닫아주는 기능
   */

  useEffect(() => {
    const handlePerceiveRouterChange = (): void => {
      if (isSideMenuOpen) {
        setIsSideMenuOpen(false);
      };
    };

    handlePerceiveRouterChange();
  }, [pathname])

  useHandleMouseEventOutSide(
    sideMenuRef,
    "mousedown",
    () => {
      if (isSideMenuOpen) {
        setIsSideMenuOpen(false);
      };
    }
  );

  return (
    <div ref={sideMenuRef} className={styles["component-container"]}>
      <div className={styles["profile"]}>
        <div className={styles["top"]}>
          <div className={styles["bell-icon-wrapper"]}>
            <Link href="/notification">
              <PiBellThin
                size={30}
                color="#FFF"
              />
            </Link>
            <div className={styles["red-dot"]}></div>
          </div>
        </div>
        <div className={styles["profile-image-wrapper"]}>
          <Image src="/image/mockImage2.jpg" fill alt="" />
        </div>
        <span className={styles["nickname"]}>운영자</span>
        <span className={styles["email"]}>essayTree@essayTree.com</span>
      </div>
      <div className={styles["main"]}>
        <div className={styles["user-behavior-box"]}>
          <button type="button">글쓰기</button>
          <button type="button">작가홈</button>
        </div>
        <ul>
          <li>
            <Link
              href="/"
              className={pathname === "/" ? styles["active"] : ""}
            >
              메인 페이지
            </Link>
          </li>
          <li>
            <Link
              href="/articles"
              className={pathname === "/articles" ? styles["active"] : ""}
            >
              에세이
            </Link>
          </li>
          <li>
            <Link href="/">인기글</Link>
          </li>
          <li>
            <Link href="/">추천하는 글</Link>
          </li>
          <li>
            <Link href="/">작가들</Link>
          </li>
        </ul>
        <div className={styles["boundary-line"]}></div>
        <div className={styles["recently-viewed-posts"]}>
          <h3>최근 본 글</h3>
          <ul>
            {mockData.slice(0, 5).map((data: any, index: number) => (
              <li key={index}>
                <BsFeather size={13} />
                <Link href="">{data.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;