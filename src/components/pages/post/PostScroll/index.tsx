import { useContentState } from "@/hooks/RootStoreProvider";
import { useScroll } from "@/hooks/useScroll";
import GlobalState from "@/stores/GlobalState";
import classNames from "classnames";
import { observer } from "mobx-react";
import { useEffect, useRef, useState } from "react";

const PostScroll = () => {
  const { content } = useContentState();
  const [isActive, setActive] = useState(0);

  return (
    <div className="post-aside__list">
      {content.acf.content
        .map((c: { title: string }) => c.title)
        ?.map((c: string, i: number) => (
          <PostAsideListItem
            key={i}
            c={c}
            isActive={isActive == i}
            setActive={setActive}
          />
        ))}
    </div>
  );
};
export default observer(PostScroll);

const PostAsideListItem = observer(
  ({
    c,
    isActive,
    setActive,
  }: {
    c: string;
    isActive: boolean;
    setActive: (value: number) => void;
  }) => {
    const scrollPos = useScroll(GlobalState.locoScroll, GlobalState.isTouch);
    const ref = useRef<HTMLDivElement | null>(null);

    const scrollTo = () => {
      const block = document.querySelector(
        `.post-content__block[data-title="${c}"]`
      );
      const mainBlock = document.querySelector(".smooth");
      if (block && mainBlock) {
        const mainTop = mainBlock.getBoundingClientRect().top;
        const blockTop = block.getBoundingClientRect().top;
        const offset = blockTop - mainTop - 24;
        if (GlobalState.isTouch) {
          window.scrollTo({
            top: offset,
            behavior: "smooth",
          });
        } else {
          GlobalState.locoScroll && GlobalState.locoScroll.scrollTo(block);
        }
      }
    };

    const activeFunc = (y: number) => {
      const smooth = document.querySelector(".smooth");
      const blocks = document?.querySelectorAll(".post-content__block");
      if (!smooth || !blocks) return;
      const bodyRect = smooth.getBoundingClientRect();
      const clearBlocks = Array.from(blocks).filter(
        (c: any) => c?.dataset?.title != "pcb-empty"
      );

      clearBlocks.forEach((b: any, i: number) => {
        if (!b) return;
        const block = b.getBoundingClientRect();

        let offset = block.top - bodyRect.top - 56,
          offsetBottom = offset + block.height - 56;
        if (offset <= y && y <= offsetBottom) {
          setActive(i);
        }
      });
    };

    useEffect(() => {
      activeFunc(scrollPos);
    }, [scrollPos, GlobalState.isTouch]);

    return (
      <div
        className={classNames("text16", isActive && "active")}
        onClick={scrollTo}
        ref={ref}
        data-title={c}
      >
        {c}
      </div>
    );
  }
);
