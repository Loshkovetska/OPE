import H1 from "@/components/common/H1";
import Text18 from "@/components/common/Text18";
import { useContentState } from "@/hooks/RootStoreProvider";
import { useEffect } from "react";
const Intro = () => {
  const { content } = useContentState();
  useEffect(() => {
    const titles = document.querySelectorAll(".intro .title, .intro .text18");
    if (titles) {
      titles.forEach((t, i) => {
        setTimeout(() => {
          t.classList.add("show");
        }, i + 500);
      });
    }
  }, []);

  return (
    <section className="intro">
      <div className="intro__video">
        <video
          src={content?.block_1?.video}
          autoPlay
          muted
          poster={content?.block_1?.poster?.url}
          playsInline
          loop
        >
          <source type="video/mp4" src={content?.block_1?.video} />
        </video>
      </div>
      <div className="intro__title desk">
        {content?.block_1?.title?.split(";").map((c: any, i: number) => (
          <div className="intro__title-bg" key={i}>
            <div style={{ overflow: "hidden" }}>
              <H1 content={c} color="black" />
            </div>
          </div>
        ))}
        <div className="intro__title-bg">
          <div style={{ overflow: "hidden" }}>
            <Text18 content={content?.block_1.text} color="black" />
          </div>
        </div>
      </div>
      <div className="intro__title mob">
        {content?.block_1?.mob_title?.split(";").map((c: any, i: number) => (
          <div className="intro__title-bg" key={i}>
            <div style={{ overflow: "hidden" }}>
              <H1 content={c} color="black" />
            </div>
          </div>
        ))}
        <div className="intro__title-bg">
          <div style={{ overflow: "hidden" }}>
            <Text18 content={content?.block_1.text} color="black" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
