import ButtonWithIcon from "@/components/common/ButtonWithIcon";
import ImageComponent from "@/components/common/ImageComponent";
import { useContentState } from "@/hooks/RootStoreProvider";
import { ServiceItemType } from "@/types";

const ServiceItem = ({ item }: { item: ServiceItemType }) => {
  const {
    content: { acf_help },
  } = useContentState();

  return (
    <></>
    // <a className="service-item">
    //   <div className="service-item__img">
    //     <ImageComponent img={item.img} />
    //   </div>
    //   <div className="service-item__content">
    //     <div className="service-item__top">
    //       <h3
    //         className="service-item__title"
    //         dangerouslySetInnerHTML={{ __html: item.title }}
    //       ></h3>
    //     </div>
    //     <ButtonWithIcon
    //       classStr="black b32 border-white"
    //       isLink
    //       link="#"
    //       content={acf_help?.button_title}
    //       icon={acf_help?.arrow_icon || {}}
    //     />
    //   </div>
    // </a>
  );
};

export default ServiceItem;
