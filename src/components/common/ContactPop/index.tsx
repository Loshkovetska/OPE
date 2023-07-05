import { useContentState } from "@/hooks/RootStoreProvider";
import GlobalState, { changeContactState } from "@/stores/GlobalState";
import classNames from "classnames";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import H2 from "../H2";
import Text18 from "../Text18";
import ReviewsList from "../ReviewsList";
import ContactPopForm from "../ContactPopForm";
import Tabs from "../Tabs";
import RequestCall from "../RequestCall";
const ContactPop = observer(() => {
  const {
    header: { contactPop, menu_close },
    header,
    content: { reviews_list, contact },
  } = useContentState();
  const [tab, setTab] = useState(0);
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    if (GlobalState.isContactPop) {
      setTimeout(() => {
        setShow(true);
      }, 1500);
    } else {
      setShow(false);
    }
  }, [GlobalState.isContactPop]);

  return (
    <>
      <div
        className={classNames(
          "contact-pop__bg",
          GlobalState.isContactPop && "anim"
        )}
      ></div>

      <section
        className={classNames(
          "contact-pop",
          GlobalState.isContactPop && "anim",
          isShow && GlobalState.isContactPop && "show"
        )}
      >
        <div className="contact-pop__container">
          <div className="contact-pop__row">
            <div className="contact-pop__reviews">
              <img
                src={header?.logotype?.url}
                alt={header?.logotype?.alt}
                className="contact-pop__logo"
              />
              <div className="contact-pop__reviews-col">
                <H2 content={contactPop?.title} color="white" />
                <Text18 content={contactPop?.text} color="white" />
              </div>
              <div className="contact-pop__reviews-list">
                <ReviewsList items={contactPop?.reviewsList} />
              </div>
            </div>
            <div className="contact-pop__form">
              <div className="contact-pop__close" onClick={changeContactState}>
                <img src={menu_close?.url} alt={menu_close?.alt} />
              </div>
              <div className="contact-pop__form-top">
                <H2 content={contactPop?.title} color="white" />
                <Text18 content={contactPop?.text} color="white" />
              </div>
              <Tabs
                tabs={contactPop?.tabs?.map(
                  (t: { tab_title: string }) => t.tab_title
                )}
                activeTab={tab}
                setActive={setTab}
              />
              {!tab && <ContactPopForm />}
              {tab > 0 && <RequestCall />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
export default ContactPop;
