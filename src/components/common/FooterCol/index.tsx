import { useWindowDimensions } from "@/hooks/getWindowDimensions";
import { useContentState } from "@/hooks/RootStoreProvider";
import { FooterColType } from "@/types";
import classNames from "classnames";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Text16 from "../Text16";

const FooterCol = ({ item }: { item: FooterColType }) => {
  const { header } = useContentState();
  const { width } = useWindowDimensions();
  const [isActive, setActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (width > 670) {
      if (!ref.current) return;
      requestAnimationFrame(() => {
        if (!ref.current) return;
        ref.current.style.height = `auto`;
      });

      return;
    }
    if (ref.current) {
      if (isActive) {
        const height = ref.current.scrollHeight;
        requestAnimationFrame(() => {
          if (!ref.current) return;
          ref.current.style.height = `${height+16}px`;
        });
      } else {
        ref.current.style.height = "0";
      }
    }
  }, [isActive, width]);

  return (
    <div className={classNames("footer-col", isActive && "active")}>
      <div className="footer-col__top" onClick={() => setActive(!isActive)}>
        <Text16 content={item?.title} color="white" />
        <div className="footer-col__icon">
          <img src={header?.arrow_down?.url} alt={header?.arrow_down?.alt} />
        </div>
      </div>
      <div className="footer-col__list" ref={ref}>
        {item?.children?.map((ch, i) => (
          <Link
            href={ch.url}
            key={i}
            className="footer__link"
            aria-label={ch?.title || ``}
          >
            {ch?.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterCol;
