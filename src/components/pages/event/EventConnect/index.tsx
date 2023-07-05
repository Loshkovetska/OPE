import Button from "@/components/common/Button";
import H2 from "@/components/common/H2";
import ImageComponent from "@/components/common/ImageComponent";
import { changeContactState } from "@/stores/GlobalState";

const EventConnect = ({ block_5 }: any) => {
  return (
    <section className="event-connect">
      <div className="event-connect__col">
        <div className="event-connect__col-content">
          <H2 content={block_5?.title} color="white" />
          <Button
            classStr="white"
            isLink={false}
            onClick={changeContactState}
            content={block_5?.button}
          />
        </div>
        <div className="event-connect__bg top">
          <div className="event-connect__bg-curve topright"></div>
          <div className="event-connect__bg-curve bottomright"></div>
        </div>
        <div className="event-connect__bg bottom">
          <div className="event-connect__bg-curve middleright"></div>
          <div className="event-connect__bg-curve rightright"></div>
          <div className="event-connect__bg-curve bottomrightcurve"></div>
          <div className="event-connect__bg-curve bottomleftcurve"></div>
        </div>
      </div>
      <div className="event-connect__image">
        <ImageComponent img={block_5?.image} />
      </div>
    </section>
  );
};

export default EventConnect;
