import { useContentState } from "@/hooks/RootStoreProvider";
import { FaqItemType } from "@/types";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import ImageComponent from "../ImageComponent";
const FaqItem = ({
  item,
  isActive = false,
  setActive,
  theme,
}: {
  item: FaqItemType;
  isActive: boolean;
  setActive: () => void;
  theme: string;
}) => {
  const {
    icons: { faq_icon },
  } = useContentState();
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (ref.current) {
      if (isActive) {
        const height = ref.current.scrollHeight;
        requestAnimationFrame(() => {
          if (!ref.current) return;
          ref.current.style.height = `${height + 2}px`;
        });
      } else {
        ref.current.style.height = "0";
      }
    }
  });
  return (
    <div className={classNames("faq-item", theme, isActive && "active")}>
      <div className="faq-item__top" onClick={setActive}>
        <h3
          className="text18 black"
          dangerouslySetInnerHTML={{ __html: item?.title }}
        ></h3>
        <div className="faq-item__icon">
          <ImageComponent img={faq_icon} />
        </div>
      </div>
      <div
        className="faq-item__content"
        ref={ref}
        dangerouslySetInnerHTML={{ __html: item?.text }}
      ></div>
    </div>
  );
};

export default FaqItem;
