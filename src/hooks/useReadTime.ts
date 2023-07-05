import { useEffect } from "react";
import { useScroll } from "./useScroll";

export const useReadLine = (
  el: HTMLDivElement | null,
  locoScroll: any,
  isTouch: boolean
) => {
  const scrollPos = useScroll(locoScroll, isTouch);
  const countReadLine = (y: number) => {
    const main = document.querySelector(".post-content__content");
    if (main) {
      const height = main.getBoundingClientRect().height;
      el?.style.setProperty("--width-line", `${(y / height) * 100}%`);
    }
  };

  useEffect(() => {
    countReadLine(scrollPos);
  }, [scrollPos]);
};
