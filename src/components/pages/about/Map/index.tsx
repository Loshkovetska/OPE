import H2 from "@/components/common/H2";
import ImageComponent from "@/components/common/ImageComponent";
import { useContentState } from "@/hooks/RootStoreProvider";

const Map = () => {
  const {
    content: {
      acf: { map },
    },
  } = useContentState();

  return (
    <section className="map">
      <H2 color="white" content={map?.title} />
      <div className="map__image">
        <ImageComponent img={map?.image} />
      </div>
    </section>
  );
};

export default Map;
