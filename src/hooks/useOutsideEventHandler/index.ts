"use client";
import { RefObject, useEffect } from "react";

const useOutsideEventHandler = (
  ref: RefObject<HTMLDivElement>,
  eventHandler?: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        console.log("click");
        eventHandler && eventHandler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [eventHandler, ref]);
};

export default useOutsideEventHandler;
