"use client";
import { useEffect, useState } from "react";

import { useGetScreenSize } from "@/hooks";

const axis = "clientX";
const touchDistinction = -100;
const enableSwipeToScreen = 769;

const useSwipe = (eventHandler: () => void) => {
  const [touchStart, setTouchStart] = useState(0);

  const { width } = useGetScreenSize();

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) =>
      setTouchStart(e.changedTouches[0][axis]);

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEnd = e.changedTouches[0][axis];

      if (touchStart - touchEnd < touchDistinction) {
        eventHandler();
      }
    };

    if (width && width < enableSwipeToScreen) {
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [axis, enableSwipeToScreen, width, touchDistinction, touchStart]);
};

export default useSwipe;
