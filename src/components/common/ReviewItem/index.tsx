import { ReviewItemType } from '@/types'
import classNames from 'classnames'

const ReviewItem = ({
  item,
  isSecond,
}: {
  item: ReviewItemType
  isSecond: boolean
}) => {
  return (
    <div className={classNames('reviews-item', isSecond && 'second')}>
      <div className="reviews-item__content">
        {/* <span className="reviews-item__subtitle">{item?.subtitle}</span> */}
        <p
          className="reviews-item__text"
          dangerouslySetInnerHTML={{
            __html: item?.text,
          }}
        ></p>
        <span className="reviews-item__subtext">{item?.author_name}</span>
        <span className="reviews-item__bottom">{item?.author_position}</span>
      </div>
    </div>
  )
}

export default ReviewItem
