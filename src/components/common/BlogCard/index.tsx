import { useContentState } from "@/hooks/RootStoreProvider";
import { BlogPostType } from "@/types";
import Link from "next/link";
import ImageComponent from "../ImageComponent";
import Text16 from "../Text16";
import classNames from "classnames";
import { getGeneralDate } from "@/hooks/funs";

const BlogCard = ({
  item,
  withText = false,
}: {
  item: BlogPostType;
  withText?: boolean;
}) => {
  const {
    content: { acf_help },
  } = useContentState();

  return (
    <Link
      className="blog-card"
      href={`/${item?.type}/${item?.slug}`}
      aria-label={item?.title?.rendered || ``}
    >
      <div className="blog-card__img">
        <div className="blog-card__image">
          <ImageComponent img={item?.acf?.img} />
        </div>
        <div className="blog-card__pop">
          <ImageComponent img={acf_help?.arrow_icon} />
        </div>
      </div>
      <div
        className={classNames("blog-card__content", withText && "with-text")}
      >
        <span className="blog-card__subtitle">
          {item?.acf?.author}{" "}
          <span className="blog-card__date">
            &nbsp;&nbsp;&bull;&nbsp;&nbsp; {getGeneralDate(item.date)}
          </span>
        </span>
        <div
          className="blog-card__title"
          dangerouslySetInnerHTML={{ __html: item?.title?.rendered }}
        ></div>
        <Text16 color="black" content={item?.acf?.preview_text} />
        <div className="blog-card__tags">
          {item?.cats.map((c: any, i: number) => (
            <div className="blog-card__tag" key={i}>
              {c?.name}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
