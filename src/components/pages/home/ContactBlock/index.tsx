import ContactForm from "@/components/common/ContactForm";
import HeadlineWithCircle from "@/components/common/HeadlineWithCircle";
import ImageComponent from "@/components/common/ImageComponent";
import Text18 from "@/components/common/Text18";
import { useContentState } from "@/hooks/RootStoreProvider";
import { useEffect, useRef } from "react";

const ContactBlock = ({ indexStart = 2 }: { indexStart?: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const {
    content: { contact },
  } = useContentState();

  useEffect(() => {
    ref.current?.querySelector(".title2")?.classList.add("title56");
  }, []);
  return (
    <section className="contact-block" ref={ref}>
      <div className="contact-block__container">
        <div className="contact-block__img">
          <ImageComponent img={contact?.img} />
        </div>
        <div className="contact-block__col">
          <HeadlineWithCircle
            vectorStyle="v1"
            color="black"
            text={contact?.title}
            indexStart={indexStart}
            headLevel="h2"
          />
          <Text18 color="black" content={contact?.text} />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
