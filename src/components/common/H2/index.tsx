import classNames from "classnames";

const H2 = ({ content, color }: { content: string; color: string }) => {
  return (
    <h2
      className={classNames("title2", color)}
      dangerouslySetInnerHTML={{ __html: content }}
    ></h2>
  );
};

export default H2;
