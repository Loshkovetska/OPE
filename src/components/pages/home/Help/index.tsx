import FaqList from "@/components/common/FaqList";
import HeadlineWithCircle from "@/components/common/HeadlineWithCircle";
import ImageComponent from "@/components/common/ImageComponent";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";
import { useEffect, useRef } from "react";

const Help = () => {
  const {
    content: { block_4, events },
  } = useContentState();

  const eventsList: Array<{
    title: string;
    text: string;
  }> = [];

  events?.forEach((c: any) => {
    eventsList.push({
      title: c.title.rendered,
      text:
        c.content.rendered +
        `<pre><a href="/${c.type}/${c.slug}/">${block_4?.button_title}</a></pre>`,
    });
  });

  return (
    <section className="help">
      <div className="help__top">
        <HeadlineWithCircle
          text={block_4?.title}
          color="white"
          headLevel="h2"
          indexStart={3}
        />
        <Text16 content={block_4?.text} color="white" />
      </div>
      <div className="help__content">
        <div className="help__list">
          <FaqList list={eventsList} theme={"light"} withFirstActive />
        </div>
        <div className="help__image">
          <ImageComponent img={block_4.image} />
        </div>
      </div>
    </section>
  );
};

export default Help;
