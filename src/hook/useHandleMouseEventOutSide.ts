/**
 * 요소밖에서 clcik, mousedown 이벤트 발생 시 실행할 hook.
 * benchMarkElement는 기준이 될 요소와 연결된 useRef 값.
 * callback은 mouse event(click or mousedown)가 요소 밖에서 발생 시 실행할 콜백 함수.
 */

import { MutableRefObject, useEffect } from "react";

const useHandleMouseEventOutSide = (
  benchMarkElementRef: MutableRefObject<HTMLElement | null>,
  eventType: "click" | "mousedown",
  callback: () => void
): void => {
  useEffect(() => {
    const handleClickOutSide = (event: Event): void => {
      if (benchMarkElementRef.current === null) {
        return;
      };

      const eventTargetNode = event.target as Element;

      if (!benchMarkElementRef.current.contains(eventTargetNode)) {
        callback();
      };
    };

    window.addEventListener(eventType, handleClickOutSide);

    return () => {
      window.removeEventListener(eventType, handleClickOutSide);
    };
  }, [benchMarkElementRef.current, eventType, callback]);
};

export default useHandleMouseEventOutSide;