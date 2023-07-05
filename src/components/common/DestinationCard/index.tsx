import { DestinationCardType } from "@/components/pages/event/EventDestination";
import H3 from "../H3";
import ImageComponent from "../ImageComponent";
import Text16 from "../Text16";
import AnimationArrow from "../AnimationArrow";

const DestinationCard = ({ item }: { item: DestinationCardType }) => {
  return (
    <div className="destination-card">
      <div className="destination-card__row">
        <div className="destination-card__img">
          <ImageComponent img={item?.image} />
        </div>
        <div className="destination-card__col">
          <H3 color="black" content={item.title} />
          <Text16 color="black" content={item.text} />
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
