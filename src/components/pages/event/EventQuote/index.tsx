import { useContentState } from "@/hooks/RootStoreProvider";
import Quotes from "../../../../assets/quote.svg";
import H3 from "@/components/common/H3";
import Text16 from "@/components/common/Text16";

const EventQuote = () => {
  const {
    content: {
      acf: { quote_block },
    },
  } = useContentState();

  return (
    <section
      className="event-quote"
      style={{
        backgroundImage: `url(${quote_block?.background_image?.sizes?.large})`,
      }}
    >
      <div className="event-quote__container">
        <div className="event-quote__cont">
          <div className="event-quote__bg top">
            <div className="event-quote__bottom">
              <div className="event-quote__img">
                <Quotes />
              </div>
            </div>
          </div>
          <div className="event-quote__content">
            <H3 color="black" content={quote_block?.text} />
            <div className="event-quote__author">
              <Text16
                color="black bold"
                content={quote_block?.author_name || ""}
              />
              <Text16
                color="black"
                content={quote_block?.author_position || ""}
              />
            </div>
          </div>
          <div className="event-quote__bg bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default EventQuote;
