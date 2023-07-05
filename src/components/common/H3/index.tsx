import classNames from 'classnames'

const H3 = ({ content, color }: { content: string; color: string }) => {
  return (
    <h3
      className={classNames('title3', color)}
      dangerouslySetInnerHTML={{ __html: content }}
    ></h3>
  )
}

export default H3
