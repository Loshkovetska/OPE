import Button from "@/components/common/Button";
import H1 from "@/components/common/H1";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";
import { useRouter } from "next/router";

const Intro = () => {
  const navigate = useRouter();
  const { content } = useContentState();
  return (
    <section className="second-intro intro404">
      <div className="second-intro__top">
        <span className="intro404__subtitle">{content?.acf?.subtitle}</span>
        <H1 color="white" content={content?.title.rendered} />
        <Text16 color="white" content={content?.content?.rendered} />
        <div className="intro404__btns">
          <Button
            isLink={false}
            content={content?.acf?.button_back}
            classStr="black white-border"
            onClick={() => navigate.back()}
          />
          <Button
            isLink={true}
            content={content?.acf?.button_home}
            classStr="yellow"
            link="/"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
