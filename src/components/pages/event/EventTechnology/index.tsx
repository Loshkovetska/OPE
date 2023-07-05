import H3 from "@/components/common/H3";
import HeadlineWithCircle from "@/components/common/HeadlineWithCircle";
import ImageComponent from "@/components/common/ImageComponent";
import ListSmallIcon from "@/components/common/ListSmallIcon";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";

const EventTechnology = () => {
  const {
    content: {
      acf: { block_6 },
    },
  } = useContentState();
  return (
    <section className="event-tech">
      <div className="event-tech__top">
        <HeadlineWithCircle
          headLevel="h2"
          indexStart={1}
          vectorStyle="v1"
          text={block_6?.title}
          color="white"
        />
        <Text16 content={block_6?.text} color="white" />
      </div>
      <div className="event-tech__list">
        {block_6?.list?.map(
          (
            c: {
              title: string;
              text: string;
              icon: {
                url: string;
                alt: string;
              };
            },
            i: number
          ) => (
            <div className="event-tech__item" key={i}>
              <div className="event-tech__item-top">
                <H3 color="white event-tech__item-title" content={c.title} />
                <ListSmallIcon icon={c.icon} />
              </div>
              <Text16 color="white" content={c.text} />
            </div>
          )
        )}
      </div>
    </section>
  );
};
export default EventTechnology;
