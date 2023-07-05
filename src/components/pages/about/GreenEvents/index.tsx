import HeadlineWithCircle from "@/components/common/HeadlineWithCircle";
import ImageComponent from "@/components/common/ImageComponent";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";

const GreenEvents = () => {
  const {
    content: {
      acf: { block_7 },
    },
  } = useContentState();
  return (
    <section className="green-events">
      <div className="green-events__top">
        <HeadlineWithCircle
          color="black"
          text={block_7?.title}
          indexStart={1}
          headLevel="h2"
          vectorStyle="v2"
        />
        <Text16 color="black" content={block_7?.text} />
      </div>
      <div className="green-events__block">
        <div className="green-events__main-img">
          <ImageComponent img={block_7?.big_image} />
        </div>
        <div className="green-events__chart">
          <ImageComponent img={block_7?.chart_image} />
        </div>
        <div className="green-events__history">
          <ImageComponent img={block_7?.history_image} />
        </div>
        <div className="green-events__reduct">
          <ImageComponent img={block_7?.reduction_image} />
        </div>
      </div>
    </section>
  );
};

export default GreenEvents;
