"use client";
import { useEffect, useState } from "react";

type Screen = { width: number | null; height: number | null };

const useGetScreenSize = () => {
  const [windowSize, setWindowSize] = useState<Screen>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    addEventListener("resize", handleResize);

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useGetScreenSize;
