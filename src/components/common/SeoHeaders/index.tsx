import { useContentState } from '@/hooks/RootStoreProvider'
import { useEffect } from 'react'

const SeoHeaders = () => {
  const content = useContentState()

  useEffect(() => {
    if (!content?.seo) return
    document.head.insertAdjacentHTML('afterbegin', content?.seo)
  }, [content?.seo])

  return <></>
}

export default SeoHeaders
