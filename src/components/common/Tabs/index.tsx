import classNames from 'classnames'
import { useEffect, useRef } from 'react'

const Tabs = ({
  tabs,
  activeTab,
  setActive,
}: {
  tabs: Array<string>
  activeTab: number
  setActive: (tab: number) => void
}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (ref.current) {
      ref.current?.style?.setProperty('--count-ch', tabs?.length + '')
    }
  }, [tabs])
  return (
    <div className="tabs" ref={ref}>
      {tabs?.map((ta, i) => (
        <div
          className={classNames('tabs__item', activeTab == i && 'active')}
          onClick={() => setActive(i)}
          key={i}
        >
          {ta}
        </div>
      ))}
    </div>
  )
}

export default Tabs
