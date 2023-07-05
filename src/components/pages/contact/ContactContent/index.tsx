import Button from "@/components/common/Button";
import ContactForm from "@/components/common/ContactForm";
import H2 from "@/components/common/H2";
import ImageComponent from "@/components/common/ImageComponent";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";
import { changeContactState } from "@/stores/GlobalState";

const ContactContent = () => {
  const {
    content: { chat_block, contacts },
  } = useContentState();

  return (
    <section className="contact-content">
      <div className="contact-content__block">
        <div className="contact-content__block-top">
          <H2 content={chat_block?.title} color="black" />
          <Text16 content={chat_block?.text} color="black" />
          <Button
            content={chat_block?.button}
            classStr="black w100"
            isLink={false}
            onClick={changeContactState}
          />
        </div>
        <div className="contact-content__list">
          <div className="contact-content__list-line">
            {chat_block?.list?.map((c: any, i: number) => (
              <div className="contact-content__item" key={i}>
                <ImageComponent img={c.image} />
              </div>
            ))}
          </div>
          <div className="contact-content__list-line">
            {chat_block?.list?.map((c: any, i: number) => (
              <div className="contact-content__item" key={i}>
                <ImageComponent img={c.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="contact-content__block">
        <div className="contact-content__block-top">
          <H2 content={contacts?.title} color="black" />
          <Text16 content={contacts?.text} color="black" />
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactContent;
