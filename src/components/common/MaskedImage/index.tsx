import classNames from 'classnames'
import ImageComponent from '../ImageComponent'

const MaskedImage = ({
  img,
  version,
}: {
  img: {
    url: string
    alt: string
  }
  version: string
}) => {
  return (
    <div className={classNames('masked-img', version)}>
      <ImageComponent img={img} />
    </div>
  )
}

export default MaskedImage
