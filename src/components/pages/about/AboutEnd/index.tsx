import Button from "@/components/common/Button";
import H2 from "@/components/common/H2";
import { useContentState } from "@/hooks/RootStoreProvider";
import { changeContactState } from "@/stores/GlobalState";

const AboutEnd = () => {
  const {
    content: {
      acf: { block_11 },
    },
  } = useContentState();
  return (
    <section className="about-end">
      <div className="about-end__content">
        <H2 content={block_11?.title} color="black" />
        <Button
          content={block_11?.button}
          classStr="black"
          isLink={false}
          onClick={changeContactState}
        />
      </div>
    </section>
  );
};

export default AboutEnd;
