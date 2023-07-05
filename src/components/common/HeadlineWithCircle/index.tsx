import classNames from "classnames";
import YellowCircle from "../../../assets/yellow-rings/Vector 2.svg";
import YellowCircle1 from "../../../assets/yellow-rings/yellow-circle.svg";
import vector from "../../../assets/yellow-rings/Vector 2.png";
import { Fragment } from "react";

const HeadlineWithCircle = ({
  color,
  text,
  indexStart,
  headLevel = "h1",
  vectorStyle = "v1",
}: {
  color: string;
  text: string;
  indexStart: number;
  headLevel: "h1" | "h2";
  vectorStyle?: "v1" | "v2";
}) => {
  const YellowVector = () =>
    vectorStyle == "v1" ? <YellowCircle /> : <YellowCircle1 />;

  const InsideWords = () => (
    <>
      {titleArr.map((c: string, i: number) => {
        if (i + 1 != indexStart) return <Fragment key={i}>{`${c} `}</Fragment>;
        return (
          <span key={i} className={classNames("headline__vector")}>
            {`${c} `}
            {/* <YellowCircle /> */}
            <img
              src={vector?.src}
              width={vector?.width}
              height={vector?.height}
              alt='on purpose'
            />
          </span>
        );
      })}
    </>
  );

  const titleArr =
    text
      ?.trim()
      .split(" ")
      .filter((c: string) => c.length) || [];

  if (headLevel == "h2") {
    return (
      <h2 className={classNames("title2 headline", color)}>
        <InsideWords />
      </h2>
    );
  }
  return (
    <h1 className={classNames("title headline", color)}>
      <InsideWords />
    </h1>
  );
};

export default HeadlineWithCircle;
