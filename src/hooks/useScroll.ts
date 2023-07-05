import GlobalState from "@/stores/GlobalState";
import { useEffect, useState } from "react";

export const useScroll = (locoScroll: any, isTouch: boolean) => {
  const [scrollPos, setScroll] = useState(0);
  useEffect(() => {
    if (!GlobalState.isTouch) {
      locoScroll &&
        locoScroll.on("scroll", ({ scroll }: any) => {
          setScroll(scroll.y);
        });
    } else {
      window?.addEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    }
  }, [locoScroll, isTouch]);

  return scrollPos;
};
