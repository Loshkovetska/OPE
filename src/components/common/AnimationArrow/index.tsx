import { useContentState } from "@/hooks/RootStoreProvider";
import ImageComponent from "../ImageComponent";

const AnimationArrow = () => {
  const { icons } = useContentState();
  return (
    <div className="anim-arrow">
      <div className="anim-arrow__line">
        <ImageComponent img={icons?.arrow_right} />
        <ImageComponent img={icons?.arrow_right} />
      </div>
    </div>
  );
};

export default AnimationArrow;
