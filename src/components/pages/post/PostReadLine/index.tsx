import { useReadLine } from "@/hooks/useReadTime";
import GlobalState from "@/stores/GlobalState";
import { observer } from "mobx-react";
import { useRef } from "react";

export const PostReadLineHidden = observer(() => {
  const ref = useRef<HTMLDivElement | null>(null);
  useReadLine(ref.current, GlobalState.locoScroll, GlobalState.isTouch);
  return <div className="post-aside__line-read hidden" ref={ref}></div>;
});

export const PostReadLine = observer(() => {
  const ref = useRef<HTMLDivElement | null>(null);
  useReadLine(ref.current, GlobalState.locoScroll, GlobalState.isTouch);

  return <div className="post-aside__line" ref={ref}></div>;
});
