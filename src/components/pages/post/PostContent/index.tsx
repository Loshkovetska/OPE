import { useContentState } from "@/hooks/RootStoreProvider";
import PostAside from "../PostAside";
import ImageComponent from "@/components/common/ImageComponent";
import PostBanner from "../PostBanner";

const PostContent = () => {
  const { content } = useContentState();
  return (
    <section className="post-content">
      <PostAside/>
      <div className="post-content__content">
        <div
          data-title={"Introduction"}
          className="post-content__block"
          style={{
            display: "flex",
          }}
        >
          <ImageComponent img={content?.acf.img} />
        </div>
        {content?.acf?.content?.map(
          (c: { title: string; content: string }, i: number) => (
            <div
              className="post-content__block"
              key={i}
              data-title={!i ? "pcb-empty" : c.title}
              dangerouslySetInnerHTML={{ __html: c.content }}
            ></div>
          )
        )}
        <PostBanner banner={content?.acf?.black_banner} />
      </div>
    </section>
  );
};

export default PostContent;
