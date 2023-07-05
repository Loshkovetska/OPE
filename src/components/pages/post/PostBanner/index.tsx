import Button from "@/components/common/Button";
import H3 from "@/components/common/H3";
import Text16 from "@/components/common/Text16";
import { changeContactState } from "@/stores/GlobalState";
import classNames from "classnames";

const PostBanner = ({
  banner,
}: {
  banner: {
    title: string;
    text: string;
    button: string;
    isBlack: boolean;
  };
}) => {
  if (!banner) return <></>;
  return (
    <div className={classNames("post-banner", !banner?.isBlack && "green")}>
      <div className="post-banner__col">
        <H3 content={banner?.title} color={"white"} />
        {banner?.text?.length > 0 && (
          <Text16 content={banner?.text} color="white" />
        )}{" "}
      </div>

      <Button
        content={banner?.button}
        classStr="white"
        isLink={false}
        onClick={changeContactState}
      />
    </div>
  );
};

export default PostBanner;
