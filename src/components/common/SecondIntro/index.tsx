import { useContentState } from '@/hooks/RootStoreProvider'
import H1 from '../H1'
import Text16 from '../Text16'

const SecondIntro = () => {
  const {
    content: { block_1 },
  } = useContentState()
  return (
    <section className="second-intro">
      <div className="second-intro__top">
        <H1 color="white" content={block_1?.title} />
        <Text16 color="white" content={block_1?.text} />
      </div>
    </section>
  )
}

export default SecondIntro
