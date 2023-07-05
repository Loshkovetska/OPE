import FocusBlock from "@/components/common/FocusBlock";
import H2 from "@/components/common/H2";
import ImageComponent from "@/components/common/ImageComponent";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";

const EventTraits = () => {
  const {
    content: {
      acf: { block_14 },
    },
  } = useContentState();
  return (
    <section className="event-traits">
      {block_14?.map(
        (
          c: {
            title: string;
            text: string;
            image:any
          },
          i: number
        ) => (
          <FocusBlock key={i}>
            <section className="event-traits__item">
              <div className="event-traits__item-img">
                <ImageComponent img={c.image} />
              </div>
              <div className="event-traits__item-col">
                <H2 content={c.title} color="black" />
                <Text16 content={c.text} color="black" />
              </div>
            </section>
          </FocusBlock>
        )
      )}
    </section>
  );
};

export default EventTraits;
