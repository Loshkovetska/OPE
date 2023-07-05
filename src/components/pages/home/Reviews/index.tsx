import H2 from "@/components/common/H2";
import ReviewsList from "@/components/common/ReviewsList";
import Text18 from "@/components/common/Text18";
import { useContentState } from "@/hooks/RootStoreProvider";

const Reviews = () => {
  const {
    content: { reviews_list },
  } = useContentState();
  return (
    <section className="reviews">
      <div className="reviews__top">
        <H2 color="white" content={reviews_list?.title} />
        <Text18 color="white" content={reviews_list?.text} />
      </div>

      <ReviewsList items={reviews_list?.reviews} />
    </section>
  );
};

export default Reviews;
