import classNames from 'classnames'

const Title56 = ({ content, color }: { content: string; color: string }) => {
  return (
    <h2
      className={classNames('title56', color)}
      dangerouslySetInnerHTML={{ __html: content }}
    ></h2>
  )
}

export default Title56
