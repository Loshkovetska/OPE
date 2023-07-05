import { useContentState } from '@/hooks/RootStoreProvider'
import GlobalState, { changeContactState } from '@/stores/GlobalState'
import classNames from 'classnames'
import { observer } from 'mobx-react'
import { useEffect, useRef } from 'react'

const ContactButton = observer(() => {
  const {
    header: { contactPop },
  } = useContentState()

  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!ref.current) return
    if (!GlobalState.isTouch) {
      GlobalState.locoScroll?.on(
        'scroll',
        (args: { scroll: { y: number } }) => {
          if (args?.scroll.y <= window.innerHeight) {
            ref.current?.classList.add('hidden')
          } else ref.current?.classList.remove('hidden')
        },
      )
    }
    if (GlobalState.isTouch) {
      let scrollPos = 0
      window.addEventListener('scroll', () => {
        const y = window.pageYOffset
        const direction = scrollPos > y ? 'up' : 'down'
        if (direction != 'up') {
          ref.current?.classList.add('pop-open')
        } else ref.current?.classList.remove('pop-open')

        scrollPos = window.pageYOffset
      })
    }
  }, [GlobalState.locoScroll, GlobalState.isTouch])

  useEffect(() => {
    if (GlobalState.isContactPop) {
      ref.current?.classList.add('pop-open')
    } else {
      ref.current?.classList.remove('pop-open')
    }
  }, [GlobalState.isContactPop])

  return (
    <>
      <div
        className="contact-button hidden"
        onClick={changeContactState}
        ref={ref}
      >
        {contactPop?.button_title}
      </div>
    </>
  )
})

export default ContactButton
