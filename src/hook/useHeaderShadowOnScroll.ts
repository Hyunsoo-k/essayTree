/**
 * Header 컴포넌트의 위치가 가장 위에 위치하지 않으면 box-shadow 속성을 주기 위한 hook.
 */

import { MutableRefObject, useEffect } from "react";

const useHeaderShadowOnScroll = (headerComponentRef: MutableRefObject<HTMLElement | null>): void => {
  useEffect(() => {
    const handleScroll = () => {
      if (headerComponentRef.current === null) {
        return;
      };

      if (window.pageYOffset === 0) {
        headerComponentRef.current.style.boxShadow = "none";
      } else {
        headerComponentRef.current.style.boxShadow = "0 5px 5px rgba(0, 0, 0, 0.5)";
      };
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerComponentRef]);
};

export default useHeaderShadowOnScroll;