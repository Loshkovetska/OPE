import { useContentState } from "@/hooks/RootStoreProvider";
import { CaseItem as CaseItemType } from "@/types";
import Link from "next/link";
import ImageComponent from "../ImageComponent";
import Text18 from "../Text18";

const CaseItem = ({ item }: { item: CaseItemType }) => {
  const {
    content: { acf_help },
  } = useContentState();

  return (
    <Link
      href={item?.link}
      className="case-item blog-card"
      aria-label={item?.title?.rendered || ``}
    >
      <div className="blog-card__img">
        <div className="blog-card__image">
          <ImageComponent img={item?.preview_image} />
        </div>
        <div className="blog-card__pop">
          <ImageComponent img={acf_help?.arrow_icon} />
        </div>
      </div>
      <div className="blog-card__content">
        <div
          className="blog-card__title"
          dangerouslySetInnerHTML={{ __html: item?.title?.rendered }}
        ></div>
        <Text18 content={item?.preview_text} color="black" />
        <div className="blog-card__tags">
          {item?.event_type?.map((c: any, i: number) => (
            <div className="blog-card__tag" key={i}>
              {c?.name}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default CaseItem;
