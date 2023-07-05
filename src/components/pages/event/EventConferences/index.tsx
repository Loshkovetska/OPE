import FaqList from "@/components/common/FaqList";
import H2 from "@/components/common/H2";
import ImageComponent from "@/components/common/ImageComponent";
import MaskedImage from "@/components/common/MaskedImage";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";

const EventConferences = () => {
  const {
    content: {
      acf: { block_4 },
    },
  } = useContentState();
  return (
    <section className="event-conf">
      <div className="event-conf__container">
        <div className="event-conf__image">
          <MaskedImage img={block_4?.image} version="conf" />
        </div>
        <div className="event-conf__col">
          <H2 color="black" content={block_4?.title} />
          <Text16 color="black" content={block_4?.text} />
          <FaqList theme="" list={block_4?.list} withFirstActive={false} />
        </div>
      </div>
    </section>
  );
};

export default EventConferences;
