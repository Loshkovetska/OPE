import H1 from "@/components/common/H1";
import ImageComponent from "@/components/common/ImageComponent";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";

const ContactIntro = () => {
  const {
    content: { block_1 },
  } = useContentState();

  return (
    <section className="general-intro contact-intro">
      <div className="general-intro__container">
        <div className="general-intro__top">
          <H1 content={block_1?.title} color="white" />
          <Text16 content={block_1?.text} color="white" />
        </div>
        <div className="general-intro__image">
          <ImageComponent img={block_1?.image} />
        </div>
      </div>
    </section>
  );
};

export default ContactIntro;
