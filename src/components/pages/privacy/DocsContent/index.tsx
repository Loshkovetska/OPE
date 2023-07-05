import H1 from "@/components/common/H1";
import { useContentState } from "@/hooks/RootStoreProvider";

const DocsContent = () => {
  const { content } = useContentState();
  return (
    <section className="docs">
      <div className="docs__intro">
        <H1 color="white" content={content?.title?.rendered} />
      </div>
      <div
        className="docs__content"
        dangerouslySetInnerHTML={{ __html: content?.content?.rendered }}
      ></div>
    </section>
  );
};

export default DocsContent;
