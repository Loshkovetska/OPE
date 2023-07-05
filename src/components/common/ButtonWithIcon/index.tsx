import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";
import ImageComponent from "../ImageComponent";

const ButtonWithIcon = ({
  isLink = false,
  isTarget,
  content,
  link,
  classStr,
  icon,
}: {
  isLink?: boolean;
  isTarget?: boolean;
  content: string | ReactNode;
  link?: string;
  classStr: string;
  icon: {
    url: string;
    alt: string;
  };
}) => {
  if (isLink && link) {
    return (
      <Link href={link}>
        <div className={classNames("button-icon", classStr)}>
          <span> {content}</span>
          <ImageComponent img={icon} />
        </div>
      </Link>
    );
  }
  return (
    <div className={classNames("button-icon", classStr)}>
      <span> {content}</span>
      <ImageComponent img={icon} />
    </div>
  );
};

export default ButtonWithIcon;
