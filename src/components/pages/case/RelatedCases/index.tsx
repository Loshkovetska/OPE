import Button from "@/components/common/Button";
import CaseItem from "@/components/common/CaseItem";
import H2 from "@/components/common/H2";
import RelatedCase from "@/components/common/RelatedCase";
import { useContentState } from "@/hooks/RootStoreProvider";

const RelatedCases = () => {
  const {
    content: { related_cases, relatedList },
  } = useContentState();
  return (
    <section className="related-cases cases">
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
          {relatedList?.map((c: any, i: number) => (
            <CaseItem item={c} key={i} />
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

export default RelatedCases;
