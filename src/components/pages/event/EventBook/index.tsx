import H2 from "@/components/common/H2";
import H3 from "@/components/common/H3";
import ImageComponent from "@/components/common/ImageComponent";
import ListSmallIcon from "@/components/common/ListSmallIcon";
import MaskedImage from "@/components/common/MaskedImage";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";

const EventBook = () => {
  const {
    content: {
      acf: { block_8 },
    },
  } = useContentState();
  return (
    <section className="event-book">
      <H2 content={block_8?.title} color="black" />
      <div className="event-book__row">
        <div className="event-book__list">
          {block_8?.list?.map(
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
              <div className="event-book__item" key={i}>
                <div className="event-book__item-top">
                  <ListSmallIcon icon={c.icon} />
                  <H3 color="black event-book__item-title" content={c.title} />
                </div>
                <div className="event-book__item-col">
                  <Text16 color="black" content={c.text} />
                </div>
              </div>
            )
          )}
        </div>
        <div className="event-book__image">
          <MaskedImage img={block_8?.image} version="book" />
        </div>
      </div>
    </section>
  );
};

export default EventBook;
