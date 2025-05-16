"use client";

/**
 * 뷰포트를 실시간으로 감지하여 mobile, tablet, desktop 사이즈를 할당하는 hook.
 */

import { useEffect } from "react";

import useViewportStore from "@/store/useViewportStore";

const useViewportObserver = () => {
  const setViewport = useViewportStore((state) => state.setViewport);

  useEffect(() => {
    const checkViewport = () => {
      const viewportWidth = window.innerWidth;

      const tabletSize = 768;
      const desktopSize = 1025;

      if (viewportWidth < tabletSize) {
        setViewport("mobile");
      } else if (viewportWidth < desktopSize) {
        setViewport("tablet");
      } else {
        setViewport("desktop");
      }
    };

    checkViewport();

    window.addEventListener("resize", checkViewport);

    return () => {
      window.removeEventListener("resize", checkViewport);
    };
  }, [setViewport]);
};

export default useViewportObserver;
