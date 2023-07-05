import Button from "@/components/common/Button";
import H2 from "@/components/common/H2";
import ListSmallIcon from "@/components/common/ListSmallIcon";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";
import { changeContactState } from "@/stores/GlobalState";

const ZeroBlock = () => {
  const {
    content: {
      acf: { block_2, button },
    },
  } = useContentState();
  return (
    <section className="zero-block">
      <div className="zero-block__container">
        <div className="zero-block__top">
          <H2 color="black" content={block_2?.title} />
          <Text16 color="black" content={block_2?.text} />
        </div>
        <div className="zero-block__list">
          {block_2?.blocks?.map(
            (
              c: {
                text: string;
                icon: any;
              },
              i: number
            ) => (
              <div className="zero-block__item" key={i}>
                <ListSmallIcon icon={c.icon} />
                <Text16 color="black" content={c.text} />
              </div>
            )
          )}
        </div>
        <Button
          classStr="black w100"
          isLink={false}
          onClick={changeContactState}
          content={button}
        />
      </div>
    </section>
  );
};

export default ZeroBlock;
