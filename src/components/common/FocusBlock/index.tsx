import classNames from 'classnames'
import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

const FocusBlock = ({ children }: { children: ReactNode }) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  })

  return (
    <div className={classNames('focus-block', inView && 'focused')} ref={ref}>
      {children}
    </div>
  )
}

export default FocusBlock
