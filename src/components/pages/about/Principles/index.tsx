import H2 from "@/components/common/H2";
import H3 from "@/components/common/H3";
import ImageComponent from "@/components/common/ImageComponent";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";

const Principles = () => {
  const {
    content: {
      acf: { block_6 },
    },
  } = useContentState();
  return (
    <section className="principles">
      <div className="principles__top">
        <H2 color="black" content={block_6?.title} />
        <Text16 color="black" content={block_6?.text} />
      </div>
      <div className="principles__list">
        {block_6?.list?.map(
          (
            c: {
              title: string;
              text: string;
              image: any;
            },
            i: number
          ) => (
            <div className="principles__item" key={i}>
              <div className="principles__item-col">
                <H3 color="black" content={c.title} />
                <Text16 color="black" content={c.text} />
              </div>
              <div className="principles__item-img">
                <ImageComponent img={c.image} />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Principles;
