import classNames from 'classnames'

const Text18 = ({ content, color }: { content: string; color: string }) => {
  return (
    <p
      className={classNames('text18', color)}
      dangerouslySetInnerHTML={{ __html: content }}
    ></p>
  )
}

export default Text18
