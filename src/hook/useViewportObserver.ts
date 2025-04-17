"use client";

import { useEffect } from "react";

import useViewportStore from "@/store/useViewportStore";

const useViewportObserver = () => {
  const setViewport = useViewportStore((state) => state.setViewport);

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;

      const tabletSize = 768;
      const desktopSize = 1025;

      if (width < tabletSize) setViewport("mobile");
      else if (width < desktopSize) setViewport("tablet");
      else setViewport("desktop");
    };

    checkViewport();

    window.addEventListener("resize", checkViewport);

    return () => {
      window.removeEventListener("resize", checkViewport);
    };
  }, [setViewport]);
};

export default useViewportObserver;
