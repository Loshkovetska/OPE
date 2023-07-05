import H3 from "@/components/common/H3";
import ImageComponent from "@/components/common/ImageComponent";
import Text16 from "@/components/common/Text16";
import classNames from "classnames";
import Link from "next/link";

export type InspireCardType = {
  title: string;
  text?: string | null;
  image: {
    url: string;
    alt: string;
  };
  link: string;
};

const InspireCard = ({
  item,
  withText,
}: {
  item: InspireCardType;
  withText: boolean;
}) => {
  return (
    <Link
      className={classNames("inspire-card", !item?.link && "no-link")}
      href={item?.link || "#"}
      aria-label={item?.title || ``}
    >
      <div className="inspire-card__image">
        <ImageComponent img={item.image} />
      </div>
      <div className={classNames("inspire-card__content")}>
        <H3
          color={classNames("black", !withText && "center")}
          content={item.title}
        />
        {withText && <Text16 color="black" content={item?.text || ""} />}
      </div>
    </Link>
  );
};

export default InspireCard;
