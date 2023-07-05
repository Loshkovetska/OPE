import GreenVector from "../../../../assets/green-vector2.svg";
import YellowCircle from "../../../../assets/yellow-rings/yellow-circle.svg";
import Button from "@/components/common/Button";
import { useContentState } from "@/hooks/RootStoreProvider";
import { changeContactState } from "@/stores/GlobalState";
import HeadlineWithCircle from "@/components/common/HeadlineWithCircle";
const GreenTouch = () => {
  const {
    header,
    content: { block_5 },
  } = useContentState();

  return (
    <section className="green-touch">
      <div className="green-touch__content">
        <HeadlineWithCircle
          text={block_5?.title}
          color="white"
          indexStart={2}
          headLevel="h2"
          vectorStyle="v2"
        />
        <Button
          isLink={false}
          classStr="white"
          content={header?.getin}
          onClick={changeContactState}
        />
      </div>
    </section>
  );
};

export default GreenTouch;
