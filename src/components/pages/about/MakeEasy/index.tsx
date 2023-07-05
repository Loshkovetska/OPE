import H2 from "@/components/common/H2";
import ImageComponent from "@/components/common/ImageComponent";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";

const MakeEasy = () => {
  const {
    content: {
      acf: { block_4 },
    },
  } = useContentState();
  return (
    <section className="make-easy">
      <div className="make-easy__top">
        <H2 color="black" content={block_4?.title} />
        <Text16 color="black" content={block_4?.text} />
      </div>
      <div className="make-easy__list">
        {block_4?.list?.map(
          (
            c: {
              text: string;
              image: any;
            },
            i: number
          ) => (
            <div className="make-easy__item" key={i}>
              <div className="make-easy__item-img">
                <ImageComponent img={c.image} />
              </div>
              <Text16 color="black" content={c.text} />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default MakeEasy;
