import { useContentState } from '@/hooks/RootStoreProvider'
import YellowCircle from '../../../assets/yellow-rings/Vector 2.svg'
import ImageComponent from '../ImageComponent'

const GeneralIntro = () => {
  const {
    content: { block_1 },
  } = useContentState()
  const titleArr = block_1?.title
    ?.trim()
    .split(' ')
    .filter((c: string) => c.length)||[]

  return (
    <section className="general-intro">
      <div className="general-intro__container">
        <div className="general-intro__top">
          <h1 className="title white">
            {titleArr.map((c: string, i: number) => {
              if (i + 1 != 3) return <>{`${c} `}</>
              return (
                <span key={i}>
                  {`${c} `}
                  {i + 1 == 3 && <YellowCircle />}
                </span>
              )
            })}
          </h1>
        </div>
        <div className="general-intro__image">
          <ImageComponent img={block_1?.image} />
        </div>
      </div>
    </section>
  )
}

export default GeneralIntro
