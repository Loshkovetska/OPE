import Button from "@/components/common/Button";
import H2 from "@/components/common/H2";
import HeadlineWithCircle from "@/components/common/HeadlineWithCircle";
import MaskedImage from "@/components/common/MaskedImage";
import Text18 from "@/components/common/Text18";
import { useContentState } from "@/hooks/RootStoreProvider";
import { changeContactState } from "@/stores/GlobalState";
import classNames from "classnames";

const BlackTouch = ({
  block_9,
  color = "black",
  withCircle = false,
  indexStart = 0,
}: {
  withCircle: boolean;
  indexStart?: number;
  block_9:
    | {
        title: string;
        text: string;
        image: {
          url: string;
          alt: string;
        };
        button?:string
      }
    | any;
  color?: string;
}) => {
  const { header } = useContentState();
  return (
    <section className={classNames("black-touch", color)}>
      <div className="black-touch__container">
        <div className="black-touch__col">
          {withCircle ? (
            <HeadlineWithCircle
              color="white"
              text={block_9?.title}
              headLevel="h2"
              indexStart={indexStart}
              vectorStyle="v2"
            />
          ) : (
            <H2 color="white" content={block_9?.title} />
          )}
          <Text18 color="white" content={block_9?.text} />
          <Button
            classStr={color == "white" ? "black" : "white"}
            isLink={false}
            content={block_9?.button ? block_9.button : header?.getin}
            onClick={changeContactState}
          />
        </div>
        <div className="black-touch__img">
          <MaskedImage img={block_9.image} version="v2" />
        </div>
      </div>
    </section>
  );
};

export default BlackTouch;
