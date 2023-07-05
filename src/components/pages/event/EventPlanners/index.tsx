import H2 from "@/components/common/H2";
import ListSmallIcon from "@/components/common/ListSmallIcon";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";

const EventPlanners = () => {
  const {
    content: {
      acf: { block_15 },
    },
  } = useContentState();
  return (
    <section className="event-plan">
      <H2 color="white" content={block_15?.title} />
      <div className="event-plan__list">
        {block_15?.list?.map(
          (
            c: {
              text: string;
              icon: {
                url: string;
                alt: string;
              };
            },
            i: number
          ) => (
            <div className="event-plan__item" key={i}>
              <ListSmallIcon icon={c.icon} />
              <Text16 content={c.text} color="white" />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default EventPlanners;
