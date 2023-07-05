import classNames from "classnames"

const Text16 = ({ content, color }: { content: string, color:string }) => {
  return (
    <p className={classNames("text16", color)} dangerouslySetInnerHTML={{ __html: content }}></p>
  )
}

export default Text16
