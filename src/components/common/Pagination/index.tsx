import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { usePagination } from '../../../hooks/usePagination'
import ImageComponent from '../ImageComponent'
import { useContentState } from '@/hooks/RootStoreProvider'

const Pagination = ({
  data,
  currentPage,
  itemsPerPage,
  setCurrentPage,
  getLastPage,
}: {
  currentPage: number
  data: Array<any>
  itemsPerPage: number
  setCurrentPage: (value: number) => void
  getLastPage: (value: number) => void
}) => {
  const { header } = useContentState()

  const [page, setPage] = useState(currentPage)
  const getTotal = () => itemsPerPage

  const paginationRange = usePagination({
    currentPage: page,
    totalCount: getTotal(),
    siblingCount: 1,
    pageSize: itemsPerPage,
  })

  const onNext = () => {
    if (page + 1 <= getTotal()) {
      setCurrentPage(page + 1)
    }
  }

  const onPrevious = () => {
    if (page - 1 > 0) {
      setCurrentPage(page - 1)
    }
  }

  useEffect(() => {
    setPage(currentPage)
  }, [currentPage])

  useEffect(() => {
    if (!paginationRange) return

    getLastPage(+paginationRange[paginationRange.length - 1])
  }, [paginationRange])

  if (!paginationRange) return <></>
  let lastPage = paginationRange[paginationRange.length - 1]

  if (paginationRange.length < 2) {
    return null
  }

  return (
    <div className="pagination">
      <ul className={classNames('pagination-list')}>
        <div className="pagination-sub">
          {page != 1 && (
            <li
              className={classNames('pagination-arrow prev')}
              onClick={onPrevious}
            >
              <ImageComponent img={header?.arrow_down} />
            </li>
          )}
          {paginationRange.map((pageNumber, i) => {
            if (pageNumber === 'DOTS') {
              return (
                <li className="pagination-break" key={i}>
                  ...
                </li>
              )
            }
            return (
              <li
                className={classNames(
                  'pagination-page',
                  pageNumber === page && 'active',
                )}
                key={i}
                onClick={() => {
                  setCurrentPage(+pageNumber)
                }}
              >
                {pageNumber}{' '}
              </li>
            )
          })}
          {page != lastPage && (
            <li
              className={classNames('pagination-arrow next')}
              onClick={onNext}
            >
              <ImageComponent img={header?.arrow_down} />{' '}
            </li>
          )}
        </div>
      </ul>
    </div>
  )
}

export default Pagination
