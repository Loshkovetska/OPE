import Button from "@/components/common/Button";
import FaqList from "@/components/common/FaqList";
import H2 from "@/components/common/H2";
import H3 from "@/components/common/H3";
import HeadlineWithCircle from "@/components/common/HeadlineWithCircle";
import MaskedImage from "@/components/common/MaskedImage";
import Text18 from "@/components/common/Text18";
import { useContentState } from "@/hooks/RootStoreProvider";
import { changeContactState } from "@/stores/GlobalState";

const Faqs = ({
  block_10,
  withFirstActive = false,
}: {
  block_10: {
    title: string;
    text: string;
    list: Array<any>;
    button: {
      url: string;
      title: string;
    };
  };
  withFirstActive: boolean;
}) => {
  const { faqCTA } = useContentState();
  const titleArr =
    block_10?.title
      ?.trim()
      .split(" ")
      .filter((c: string) => c.length) || [];
  return (
    <section className="faqs">
      <div className="faqs__container">
        <div className="faqs__top">
          <HeadlineWithCircle
            color="black"
            text={block_10?.title}
            vectorStyle="v2"
            headLevel="h2"
            indexStart={titleArr?.length}
          />
          <Text18 color="black" content={block_10?.text} />
        </div>
        <div className="faqs__content">
          <FaqList
            list={block_10?.list}
            theme=""
            withFirstActive={withFirstActive}
          />
          <div className="faqs__cta">
            <H3 color="black" content={faqCTA?.title} />
            <Button
              classStr="black"
              content={faqCTA?.button_title}
              isLink={false}
              onClick={changeContactState}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
