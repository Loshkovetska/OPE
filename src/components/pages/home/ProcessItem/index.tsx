import H3 from "@/components/common/H3";
import ImageComponent from "@/components/common/ImageComponent";
import Text16 from "@/components/common/Text16";

const ProcessItem = ({ co }: { co: any }) => {
  return (
    <div className="process__item">
      <div className="process__item-icon">
        <ImageComponent img={co.icon} />
      </div>
      <H3 content={co.title} color="black" />
      <Text16 content={co.text} color="black" />
    </div>
  );
};

export default ProcessItem;
