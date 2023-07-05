import H2 from "@/components/common/H2";
import Text18 from "@/components/common/Text18";
import { useContentState } from "@/hooks/RootStoreProvider";
import ProcessSlider from "../ProcessSlider";
import ProcessLine from "../ProcessLine";

const Process = () => {
  const {
    content: { block_6 },
  } = useContentState();

  return (
    <section className="process">
      <div className="process__top">
        <H2 color="black" content={block_6?.title} />
        <Text18 color="black" content={block_6?.text} />
      </div>
      <ProcessLine />
      <ProcessSlider />
    </section>
  );
};

export default Process;
