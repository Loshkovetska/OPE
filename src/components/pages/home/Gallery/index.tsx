import ImageComponent from "@/components/common/ImageComponent";
import Text18 from "@/components/common/Text18";
import { useContentState } from "@/hooks/RootStoreProvider";
import classNames from "classnames";
import { Fragment, useState } from "react";
import YellowCircle from "../../../../assets/yellow-rings/yellow-circle.svg";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });
  const {
    content: { block_11 },
  } = useContentState();
  const titleArr = block_11?.title
    ?.trim()
    .split(" ")
    .filter((c: string) => c.length);

  return (
    <section className={classNames("gallery", inView && "in-view")} ref={ref}>
      <div className="gallery__container">
        <div className="gallery__top">
          <h2 className="title56 black">
            {titleArr.map((c: string, i: number) => {
              if (i + 1 != titleArr.length - 2)
                return <Fragment key={i}>{`${c} `}</Fragment>;
              return (
                <span key={i}>
                  {`${c} `}
                  {i + 1 == titleArr?.length - 2 && <YellowCircle />}
                </span>
              );
            })}
          </h2>
          <Text18 content={block_11?.text} color="black" />
        </div>
        <div className="gallery__list">
          {block_11?.images_list?.map(
            (
              li: {
                image: { url: string; alt: string };
              },
              i: number
            ) => (
              <div className="gallery__item" key={i}>
                <ImageComponent img={li?.image} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
