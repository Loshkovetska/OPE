import classNames from "classnames";

const H1 = ({ content, color }: { content: string; color: string }) => {
  return (
    <h1
      className={classNames("title", color)}
      dangerouslySetInnerHTML={{ __html: content }}
    ></h1>
  );
};

export default H1;
