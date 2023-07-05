import Button from "@/components/common/Button";
import H2 from "@/components/common/H2";
import MaskedImage from "@/components/common/MaskedImage";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";

const Experience = () => {
  const {
    content: { block_3 },
  } = useContentState();

  return (
    <section className="exp">
      <div className="exp__container">
        <div className="exp__img">
          <MaskedImage img={block_3.image} version="v1" />
        </div>
        <div className="exp__content">
          <H2 content={block_3.title} color="black" />
          <Text16 content={block_3.text} color="black" />
          <Button
            isLink
            link={block_3?.button?.url}
            isTarget={false}
            classStr="black"
            content={block_3?.button?.title}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
