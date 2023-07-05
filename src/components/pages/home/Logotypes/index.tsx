import ImageComponent from "@/components/common/ImageComponent";
import classNames from "classnames";
import { useEffect, useRef } from "react";

const Logotypes = ({
  style,
  content,
}: {
  style?: any;
  content: {
    title: string;
    images: Array<{
      image: {
        url: string;
        alt: string;
      };
    }>;
  };
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref?.current?.style.setProperty("--count-el", "");
  }, [content?.images]);
  return (
    <section className={classNames("logotypes", style)} ref={ref}>
      <div className="logotypes__top">
        <span className="logotypes__title">{content?.title}</span>
      </div>
      <div
        className={classNames(
          "logotypes__container",
          "el" + content?.images?.length
        )}
      >
        {content?.images?.map((lo: any, i: number) => (
          <div className="logotypes__item" key={i}>
            <ImageComponent img={lo?.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logotypes;
