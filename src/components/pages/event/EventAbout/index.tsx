import Button from "@/components/common/Button";
import HeadlineWithCircle from "@/components/common/HeadlineWithCircle";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";
import { changeContactState } from "@/stores/GlobalState";
import Logotypes from "../../home/Logotypes";

const EventAbout = () => {
  const {
    content: {
      acf: { event_info, block_3 },
    },
    content,
  } = useContentState();

  return (
    <section className="event-about">
      <div className="event-about__container">
        <div className="event-about__col">
          <HeadlineWithCircle
            headLevel="h2"
            color="black"
            text={event_info?.title}
            indexStart={+event_info?.number}
            vectorStyle="v2"
          />
          <Button
            classStr="black w100"
            isLink={false}
            onClick={changeContactState}
            content={event_info?.button}
          />
        </div>
        <Text16 content={event_info?.text} color="black" />
      </div>
      <div className="space"></div>
      <Logotypes style={"line"} content={block_3} />
      <Button
        classStr="black w100"
        isLink={false}
        onClick={changeContactState}
        content={event_info?.button}
      />
    </section>
  );
};

export default EventAbout;
