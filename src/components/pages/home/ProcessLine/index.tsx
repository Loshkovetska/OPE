import { useContentState } from "@/hooks/RootStoreProvider";
import ProcessItem from "../ProcessItem";
import { useEffect, useRef } from "react";
import { useScroll } from "@/hooks/useScroll";
import { observer } from "mobx-react";
import GlobalState from "@/stores/GlobalState";

const ProcessLine = () => {
  const {
    content: { block_6 },
  } = useContentState();

  const ref = useRef<HTMLDivElement | null>(null);
  const scrollPos = useScroll(GlobalState.locoScroll, GlobalState.isTouch);

  const translate = (y: number) => {
    if (!ref.current) return;
    const scrolLWidth = ref.current.scrollWidth;
    const viewWidth = ref.current.getBoundingClientRect().width;
    let diff = scrolLWidth - viewWidth;

    //containers
    const smooth = document.querySelector(".smooth"),
      container = document?.querySelector(".process");

    if (!smooth || !container) return;
    const bodyRect = smooth!.getBoundingClientRect(),
      elemRect = container.getBoundingClientRect(),
      offset = elemRect.top - bodyRect.top - window.innerHeight/2,
      offsetBottom = offset + elemRect.height;

    diff += parseInt(getComputedStyle(ref.current).padding);
    if (y >= offset && y <= offsetBottom && window.innerWidth > 900) {
      const value = (y - offset) / elemRect.height;

      requestAnimationFrame(() => {
        if (!ref.current) return;
        ref.current.style.transform = `translate(${
          (value * diff >= diff ? diff : value * diff) * -1
        }px,0)`;
      });
    }
  };
  useEffect(() => {
    if (!ref.current) return;
    translate(scrollPos);
  }, [scrollPos]);

  return (
    <div className="process__line" ref={ref}>
      {block_6?.list?.map(
        (
          co: {
            title: string;
            icon: {
              url: string;
              alt: string;
            };
            text: string;
          },
          i: number
        ) => (
          <ProcessItem key={i} co={co} />
        )
      )}
    </div>
  );
};

export default observer(ProcessLine);
