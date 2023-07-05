import Button from '@/components/common/Button'
import H2 from '@/components/common/H2'
import BlogCard from '@/components/common/BlogCard'
import { useContentState } from '@/hooks/RootStoreProvider'
import { BlogPostType } from '@/types'

const Blog = () => {
  const {
    content: { news_block },
  } = useContentState()

  return (
    <section className="blog">
      <div className="blog__container">
        <div className="blog__top">
          <H2 content={news_block?.title} color="black" />
          <Button
            content={news_block?.button?.title}
            classStr="black"
            isLink={true}
            link={news_block?.button?.url}
          />
        </div>
        <div className="blog__list">
          {news_block?.cards?.map((c: BlogPostType, i: number) => (
            <BlogCard item={c} key={i} />
          ))}
        </div>
        <Button
          content={news_block?.button?.title}
          classStr="black"
          isLink={true}
          link={news_block?.button?.url}
        />
      </div>
    </section>
  )
}

export default Blog
