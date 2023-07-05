import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";
import { useEffect, useState } from "react";

export const useReadTime = (content:any) => {
  const [readTime, setTime] = useState("");
  useEffect(() => {
    if (readTime.length) return;
    if (!content) return;
    let text = ``;
    content?.forEach((f: { content: string }) => {
      text += `${f.content}`;
    });
    const time = Math.ceil(text.replace(/(<([^>]+)>)/gi, "").length / 1500);
    setTime(`${time}`);
  }, [content, readTime]);
  return readTime;
};

const PostReadTime = () => {
  const { content } = useContentState();
  const readTime = useReadTime(content?.acf?.content);
  return <Text16 color="black bold" content={`${readTime} min`} />;
};

export default PostReadTime;
