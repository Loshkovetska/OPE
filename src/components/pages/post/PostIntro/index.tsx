import H1 from "@/components/common/H1";
import { useContentState } from "@/hooks/RootStoreProvider";
import { getGeneralDate } from "@/hooks/funs";
import { useReadTime } from "../PostReadTime";

const PostIntro = () => {
  const { content, cats } = useContentState();
  const readTime = useReadTime(content?.acf?.content);
  const events = cats?.filter((c: any) =>
    content["category-blog"].includes(c.id)
  );

  return (
    <section className="general-intro post-intro">
      <div className="post-intro__container">
        <div className="general-intro__top">
          <H1 content={content?.acf?.title} color="white" />
          <div className="case-intro__tags">
            <div className="case-intro__tags">
              {events?.map((c: any, i: number) => (
                <div className="text16 white" key={i}>
                  {c.name}
                </div>
              ))}
            </div>
            <span className="post-intro__date">
              {getGeneralDate(content.date)} <span>&bull;</span> {readTime} min
              read
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostIntro;
