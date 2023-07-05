import H2 from "@/components/common/H2";
import H3 from "@/components/common/H3";
import ImageComponent from "@/components/common/ImageComponent";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";

const Team = () => {
  const {
    content: {
      acf: { block_9 },
    },
  } = useContentState();
  return (
    <section className="team">
      <div className="team__top">
        <H2 color="black" content={block_9?.title} />
        <Text16 color="black" content={block_9?.text} />
      </div>
      <div className="team__list">
        {block_9?.list?.map(
          (
            c: {
              image: any;
              name: string;
              position: string;
            },
            i: number
          ) => (
            <div className="team__item" key={i}>
              <div className="team__item-img">
                <ImageComponent img={c.image} />
              </div>
              <H3 color="black" content={c?.name} />
              <Text16 color="black" content={c?.position} />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Team;
