import { ReviewItemType } from "@/types";
import ReviewItem from "../ReviewItem";
import { useWindowDimensions } from "@/hooks/getWindowDimensions";
import Slider from "react-slick";
const ReviewsList = ({ items }: { items: Array<ReviewItemType> }) => {
  const { width } = useWindowDimensions();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    variableWidth: true,
    initialSlide: 0,
  };

  return (
    <section className="reviews-list">
      <Slider {...settings}>
        {items?.map((it, i) => (
          <ReviewItem item={it} isSecond={(i + 1) % 2 == 0} key={i} />
        ))}
      </Slider>
    </section>
  );
};

export default ReviewsList;

