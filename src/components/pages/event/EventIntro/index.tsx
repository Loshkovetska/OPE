import Button from "@/components/common/Button";
import H1 from "@/components/common/H1";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";
import { useEffect, useRef } from "react";
import ImageComponent from "@/components/common/ImageComponent";
import { changeContactState } from "@/stores/GlobalState";
import { useRouter } from "next/router";
import classNames from "classnames";

const EventIntro = () => {
  const {
    content,
    content: { acf },
  } = useContentState();
  const ref = useRef<HTMLDivElement | null>(null);
  const { asPath } = useRouter();
  useEffect(() => {
    ref.current &&
      ref.current.style.setProperty("--main-color", acf?.main_color);
  }, [asPath]);

  return (
    <section
      className={classNames("event-intro", asPath == "/about" && "about-page")}
      ref={ref}
    >
      <div className="event-intro__container">
        <div className="event-intro__top">
          <H1 color="white" content={content?.title?.rendered} />
          <Text16 color="white" content={content?.content?.rendered} />
          <Button
            classStr="white"
            isLink={false}
            onClick={changeContactState}
            content={acf?.button}
          />
        </div>
        <div className="event-intro__image">
          {acf?.video ? (
            <video
              src={acf?.video?.url}
              autoPlay
              muted
              poster={acf.poster?.url}
              playsInline
              loop
            >
              <source type="video/mp4" src={acf?.video?.url} />
            </video>
          ) : (
            <ImageComponent img={acf?.poster} />
          )}
        </div>
      </div>
    </section>
  );
};

export default EventIntro;
