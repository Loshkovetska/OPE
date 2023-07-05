import BlogCard from "@/components/common/BlogCard";
import Button from "@/components/common/Button";
import H2 from "@/components/common/H2";
import { useContentState } from "@/hooks/RootStoreProvider";
import { BlogPostType, CaseItem } from "@/types";

const EventCases = () => {
  const {
    content: { related_cases, relatedList },
  } = useContentState();

  return (
    <section className="related-cases">
      <div className="related-cases__container">
        <div className="related-cases__top">
          <H2 color="black" content={related_cases?.title} />
          <Button
            content={related_cases?.button?.title}
            classStr="black"
            isLink={true}
            link={related_cases?.button?.url}
          />
        </div>
        <div className="related-cases__list">
          {relatedList?.map((c: BlogPostType, i: number) => (
            <BlogCard item={c} key={i} />
          ))}
        </div>
        <Button
          content={related_cases?.button?.title}
          classStr="black"
          isLink={true}
          link={related_cases?.button?.url}
        />
      </div>
    </section>
  );
};

export default EventCases;
