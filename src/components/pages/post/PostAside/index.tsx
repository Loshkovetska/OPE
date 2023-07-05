import Text16 from "@/components/common/Text16";
import GlobalState from "@/stores/GlobalState";
import { observer } from "mobx-react";
import { useEffect, useRef } from "react";
import PostReadTime from "../PostReadTime";
import PostScroll from "../PostScroll";
import classNames from "classnames";
import { PostReadLine } from "../PostReadLine";
import { useScroll } from "@/hooks/useScroll";
import { getTranslate, transform } from "@/hooks/funs";

const PostAside = observer(({ className = "" }: { className?: string }) => {
  const scrollPos = useScroll(GlobalState.locoScroll, GlobalState.isTouch);
  const ref = useRef<HTMLDivElement | null>(null);
  const readTimeAnimate = (y: number) => {
    const smooth = document.querySelector(".smooth");
    const main = document.querySelector(".post-content");
    if (main) {
      const bodyRect = smooth!.getBoundingClientRect();
      const lineDesk: HTMLDivElement | null =
        main.querySelector(".post-aside__line");
      const lineMob: HTMLDivElement | null = document.querySelector(
        ".post-aside__line-read"
      );

      if (lineMob) {
        if (window.innerWidth <= 900 && lineDesk) {
          const offset = lineDesk?.getBoundingClientRect()?.top - bodyRect.top;
          if (y > offset) {
            lineMob.classList.remove("hidden");
          } else lineMob.classList.add("hidden");
        }
      }
    }
  };

  // const translate = (y: number) => {
  //   if (!ref.current) return;

  //   const smooth = document.querySelector(".smooth"),
  //     container = document?.querySelector(".post-content");
  //   if (!smooth || !container) return;
  //   const bodyRect = smooth!.getBoundingClientRect(),
  //     elemRect = container.getBoundingClientRect(),
  //     offset = elemRect.top - bodyRect.top,
  //     offsetBottom =
  //       offset +
  //       elemRect.height -
  //       ref.current.getBoundingClientRect().height -
  //       parseInt(getComputedStyle(container).paddingTop) -
  //       parseInt(getComputedStyle(container).paddingBottom);
  //   requestAnimationFrame(() => {
  //     if (!ref.current) return;

  //     if (y >= offset && y <= offsetBottom && window.innerWidth > 900) {
  //       transform(
  //         ref.current,
  //         `translate(0, ${
  //           y - offset > offsetBottom ? offsetBottom : y - offset
  //         }px)`
  //       );
  //     }

  //     if (y < offset && window.innerWidth > 900) {
  //       transform(ref.current, `translate(0,0)`);

  //       return;
  //     }
  //   });
  // };

  // useEffect(() => {
  //   if (window.innerWidth > 900 && GlobalState.isTouch) return;

  //   if (!GlobalState.isTouch && window.innerWidth > 900) {
  //     GlobalState.locoScroll &&
  //       GlobalState.locoScroll.on("scroll", ({ scroll }: any) => {
  //         // translate(scroll.y);
  //         //readTimeAnimate(scroll.y);
  //       //  blocksActiveAnimate(scroll.y);
  //       });
  //   } else {
  //     window?.addEventListener("scroll", () => {
  //     //  translate(window.scrollY);
  //       // readTimeAnimate(window.scrollY);
  //      // blocksActiveAnimate(window.scrollY);
  //     });
  //   }
  // }, [GlobalState.locoScroll, GlobalState.isTouch]);

  const translate = (y: number) => {
    const aside = document.querySelector(".post-aside:not(.fixed)");
    if (!aside) return;
    const asideFixed = document.querySelector(".post-aside.fixed");
    if (!asideFixed) return;
    const smooth = document.querySelector(".smooth"),
      container = document?.querySelector(".post-content__content");
    if (!smooth || !container) return;
    const bodyRect = smooth!.getBoundingClientRect(),
      elemRect = container.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top - 84,
      offsetBottom =
        offset + elemRect.height - aside.getBoundingClientRect().height;
    //-
    // parseInt(getComputedStyle(container).paddingTop) -
    // parseInt(getComputedStyle(container).paddingBottom);

    (asideFixed as HTMLDivElement).style.setProperty(
      "--left-pos",
      (aside as HTMLDivElement).offsetLeft + "px"
    );

    if (y < offset) {
      aside.classList.remove("hidden");
      asideFixed.classList.remove("visible");
    }

    if (y < offsetBottom / 2) {
      (aside as HTMLDivElement).style.transform = `translate(0,${0}px)`;
    }

    if (y >= offset && y <= offsetBottom && window.innerWidth > 900) {
      asideFixed.classList.add("visible");
      aside.classList.add("hidden");
      (aside as HTMLDivElement).style.transform = `translate(0,${
        y - offset > offsetBottom ? offsetBottom : y - offset
      }px)`;
    } else asideFixed.classList.remove("visible");

    if (y >= offsetBottom) {
      aside.classList.remove("hidden");
    }
  };
  useEffect(() => {
    readTimeAnimate(scrollPos);
    translate(scrollPos);
  }, [scrollPos, GlobalState.isTouch]);

  return (
    <aside className={classNames("post-aside", className)} ref={ref}>
      <div className="post-aside__block">
        <div className="post-aside__block-row">
          <Text16 color="black" content="Read Time" />
          <PostReadTime />
        </div>
        <PostReadLine />
      </div>
      <div className="post-aside__block list-aside">
        <Text16 color="black bold" content={`Content`} />
        <PostScroll />
      </div>
    </aside>
  );
});

export default PostAside;
