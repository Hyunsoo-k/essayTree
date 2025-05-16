import Link from "next/link";
import { Dispatch, SetStateAction, forwardRef, useRef } from "react";

import useHandleMouseEventOutSide from "@/hook/useHandleMouseEventOutSide";

import styles from "./index.module.scss";

interface Props {
  isMenuDropdownOpen: boolean;
  setIsMenuDropdownOpen: Dispatch<SetStateAction<boolean>>;
};

const HeaderMenuDropdown = ({
  isMenuDropdownOpen,
  setIsMenuDropdownOpen
}: Props ): JSX.Element => {
  const HeaderMenuDropdownRef = useRef<HTMLUListElement | null>(null);

  useHandleMouseEventOutSide(
    HeaderMenuDropdownRef,
    "mousedown",
    () => setIsMenuDropdownOpen(false)
  );

  return (
    <ul
      ref={HeaderMenuDropdownRef}
      className={`${styles["component-container"]} ${isMenuDropdownOpen ? styles["--open"] : styles["--close"]}`}
    >
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
  );
};

export default HeaderMenuDropdown;
