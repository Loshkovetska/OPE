import { useContentState } from "@/hooks/RootStoreProvider";
import { useEffect } from "react";
import EventQuote from "../../event/EventQuote";

const CaseContent = () => {
  const {
    content: {
      acf: { info, quote_block },
      content,
    },
  } = useContentState();

  return (
    <section className="case-content">
      <div className="case-content__container">
        <div className="case-content__top">
          <div
            className="case-content__left"
            dangerouslySetInnerHTML={{ __html: info?.left_column }}
          ></div>
          <div className="case-content__right">
            <div className="case-content__right-title">
              {info?.right_columnTitle}
            </div>
            <div
              className="case-content__right-list"
              dangerouslySetInnerHTML={{ __html: info?.list }}
            ></div>
          </div>
        </div>
        {quote_block?.text?.length>0 && <EventQuote />}
        <div
          className="case-content__content"
          dangerouslySetInnerHTML={{
            __html: content.rendered,
          }}
        ></div>
      </div>
    </section>
  );
};

export default CaseContent;
