import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";
import Line from "../../../../assets/yellow-rings/Line.svg";
import { Fragment } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

const EndBlock = () => {
  const { asPath } = useRouter();
  const {
    content: { block_12 },
  } = useContentState();

  const titleArr =
    block_12?.title
      ?.trim()
      .split(" ")
      .filter((c: string) => c.length) || [];

  return (
    <section
      className={classNames(
        "end-block",
        asPath.includes("/about") && "about-page"
      )}
      style={{
        backgroundImage: `url(${block_12?.background_image?.url})`,
      }}
    >
      <div className="end-block__container">
        <div className="end-block__content">
          <div className="end-block__row end-block__top desk">
            <span className="end-block__number">{block_12?.number}</span>
            <h2 className="end-block__title">
              {" "}
              {titleArr.map((c: string, i: number) => {
                if (i + 1 != 7) return <Fragment key={i}>{`${c} `}</Fragment>;
                return (
                  <span key={i}>
                    {`${c} `}
                    {i + 1 == 7 && <Line />}
                  </span>
                );
              })}
            </h2>
          </div>
          <div className="end-block__line">
            <span className="end-block__number">{block_12?.number}</span>
            <h2 className="end-block__title">
              <div className="end-block__bg"></div>
              {titleArr.slice(0, 3).map((c: string, i: number) => {
                return <Fragment key={i}>{`${c} `}</Fragment>;
              })}
            </h2>
          </div>
          <div className="end-block__row end-block__top mob">
            <h2 className="end-block__title">
              {" "}
              {titleArr.slice(3).map((c: string, i: number) => {
                if (i + 1 != 4) return <Fragment key={i}>{`${c} `}</Fragment>;
                return (
                  <span key={i}>
                    {`${c} `}
                    {i + 1 == 4 && <Line />}
                  </span>
                );
              })}
            </h2>
          </div>
          <div className="end-block__row">
            <Text16 content={block_12?.text} color="black" />
            <Text16
              content={block_12?.subtext}
              color="black end-block__subtext"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndBlock;
