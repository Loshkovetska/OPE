import Button from "@/components/common/Button";
import DestinationCard from "@/components/common/DestinationCard";
import H2 from "@/components/common/H2";
import { useContentState } from "@/hooks/RootStoreProvider";

export type DestinationCardType = {
  title: string;
  text: string;
  link: string;
  image: {
    url: string;
    alt: string;
  };
};

const EventDestination = () => {
  const {
    content: {
      acf: { destinations },
    },
  } = useContentState();
  return (
    <section className="event-destination">
      <div className="event-destination__container">
        <div className="event-destination__top">
          <H2 color="black" content={destinations?.title} />
          <Button
            content={destinations?.button?.title}
            classStr="black"
            isLink={true}
            link={destinations?.button?.url}
          />
        </div>
        <div className="event-destination__list">
          {destinations?.list?.map((c: DestinationCardType, i: number) => (
            <DestinationCard key={i} item={c} />
          ))}
        </div>
        <Button
          content={destinations?.button?.title}
          classStr="black"
          isLink={true}
          link={destinations?.button?.url}
        />
      </div>
    </section>
  );
};
export default EventDestination;
