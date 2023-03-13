import { useSearchParams } from 'react-router-dom'

import debounce from 'lodash.debounce'

import Icon, { IconTypes } from 'components/common/Icon'
import * as Styled from 'components/styled/layout/Pagination.styled'

const Pagination = ({ data, isFetching }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const prevParams = Object.fromEntries(searchParams)

  const nextPage = () => {
    setSearchParams({ ...prevParams, page: data.current_page + 1 })
  }

  const prevPage = () => {
    if (data.current_page - 1 === 1) {
      delete prevParams.page
      setSearchParams({ ...prevParams })
    } else {
      setSearchParams({ ...prevParams, page: data.current_page - 1 })
    }
  }

  const page = e => {
    if (e.target.value === 1 || e.target.value === '') {
      searchParams.delete('page')
      setSearchParams({ ...Object.fromEntries(searchParams) })
    } else {
      setSearchParams({ ...prevParams, page: e.target.value })
    }
  }

  const perPage = e => {
    if (e.target.value === 20 || e.target.value === '') {
      searchParams.delete('perPage')
      setSearchParams({ ...Object.fromEntries(searchParams) })
    } else {
      setSearchParams({ ...prevParams, perPage: e.target.value })
    }
  }

  const debouncedPage = debounce(page, 1000)
  const debouncedPerPage = debounce(perPage, 500)

  return (
    <Styled.Pagination>
      <div>
        <p>
          Results: {data.current_page * data.count - data.count + 1} -{' '}
          {data.current_page * data.count} of {data.total}
          {isFetching && <Icon type={IconTypes.loader} />}
        </p>
      </div>
      <div>
        <button
          disabled={data.current_page === 1 || isFetching}
          onClick={prevPage}
        >
          <Icon type={IconTypes.chevronUp} />
        </button>
        <p>
          {data.current_page} / {data.total_pages}
        </p>
        <button
          disabled={data.current_page === data.total_pages || isFetching}
          onClick={nextPage}
        >
          <Icon type={IconTypes.chevronUp} />
        </button>
      </div>
      <div>
        <fieldset>
          <input
            type='text'
            placeholder={data.current_page}
            onChange={debouncedPage}
          />
          <label htmlFor='page'>Go To Page</label>
        </fieldset>
        <fieldset>
          <input
            type='text'
            placeholder={data.per_page}
            onChange={debouncedPerPage}
          />
          <label htmlFor='page'>Per Page</label>
        </fieldset>
      </div>
    </Styled.Pagination>
  )
}

export default Pagination
