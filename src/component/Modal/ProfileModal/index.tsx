import Image from "next/image";
import { Dispatch, SetStateAction, useRef } from "react";
import { BsFeather } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";

import useHandleMouseEventOutSide from "@/hook/useHandleMouseEventOutSide";

import styles from "./index.module.scss";

interface Props {
  isProfileModalOpen: boolean,
  setIsProfileModalOpen: Dispatch<SetStateAction<boolean>>
};

const ProfileModal = ({
  isProfileModalOpen,
  setIsProfileModalOpen
}: Props): JSX.Element => {
  const profileModalRef = useRef<HTMLDivElement | null>(null);

  useHandleMouseEventOutSide(
    profileModalRef,
    "mousedown",
    () => {
      if (isProfileModalOpen) {
        setIsProfileModalOpen(false);
      };
    }
  );

  return (
    <div
      ref={profileModalRef}
      className={styles["component-container"]}
    >
      <div className={styles["image-wrapper"]}>
        <Image
          src="/image/mockImage1.jpg"
          fill
          alt=""
        />
      </div>
      <h3>운영자</h3>
      <span>에세이트리 운영자 계정 입니다. 에세이트리 운영자 계정 입니다. 에세이트리 운영자 계정 입니다.에세이트리 운영자 계정 입니다.</span>
      <div className={styles["boundary-line"]}></div>
      <ul>
        <li>
          <BsFeather size={17} />
          작가 홈
        </li>
        <li>
          <button type="button">
            <SlLogout size={17} />
            로그아웃
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileModal;