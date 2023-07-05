import H2 from "@/components/common/H2";
import ImageComponent from "@/components/common/ImageComponent";
import { useContentState } from "@/hooks/RootStoreProvider";

const OtherEvents = ({ other_services }: { other_services: any }) => {
  const { icons } = useContentState();
  return (
    <section className="events-menu">
      <div className="events-menu__container">
        <H2 color="black" content={other_services?.title} />
        <div className="events-menu__list">
          {other_services?.list?.map((c: any, i: number) => (
            <a className="events-menu__item" href={c.url} key={i}>
              <div className="events-menu__item-title">{c.post_title}</div>
              <div className="events-menu__item-btn">
                <div className="events-menu__item-line">
                  <ImageComponent img={icons?.arrow_right} />
                  <ImageComponent img={icons?.arrow_right} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherEvents;
