import { CaseItem } from '@/types'
import Link from 'next/link'
import ImageComponent from '../ImageComponent'
import H3 from '../H3'
import ButtonWithIcon from '../ButtonWithIcon'
import { useContentState } from '@/hooks/RootStoreProvider'

const RelatedCase = ({ item }: { item: CaseItem }) => {
  const {
    icons,
    content: { related_cases },
  } = useContentState()

  return (
    <Link
      href={item.link}
      className="blog-card related-case"
      aria-label={item?.title?.rendered || ``}
    >
      <div className="related-case__content">
        <div className="blog-card__img">
          <div className="blog-card__image">
            <ImageComponent img={item?.preview_image} />
          </div>
          <div className="blog-card__pop">
            <ButtonWithIcon
              classStr="black b32 border-white"
              isLink
              link={item.link}
              content={related_cases?.case_button}
              icon={icons?.arrow_right || {}}
            />
          </div>
        </div>
        <div className="related-case__col">
          <div className="blog-card__tags">
            {item?.event_type?.map((c: any, i: number) => (
              <div className="blog-card__tag" key={i}>
                {c?.name}
              </div>
            ))}
          </div>
          <H3 color="white" content={item?.title?.rendered} />
        </div>
      </div>
    </Link>
  );
}

export default RelatedCase
