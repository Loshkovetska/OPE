import H1 from "@/components/common/H1";
import ImageComponent from "@/components/common/ImageComponent";
import { useContentState } from "@/hooks/RootStoreProvider";

const CaseIntro = () => {
  const { content, eventsType } = useContentState();
  const events = eventsType?.filter((c: any) =>
    content["event-type"].includes(c.id)
  );

  return (
    <section className="general-intro case-intro">
      <div className="general-intro__container">
        <div className="general-intro__top">
          <H1 content={content?.acf?.main_title} color="white" />
          <div className="case-intro__tags">
            {events?.map((c: any, i: number) => (
              <div className="text16 white" key={i}>
                {c.name}
              </div>
            ))}
          </div>
        </div>
        {content?.acf?.main_picture && (
          <div className="general-intro__image">
            <ImageComponent img={content?.acf?.main_picture} />
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseIntro;
