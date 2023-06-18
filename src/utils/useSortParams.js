import { useSearchParams } from 'react-router-dom'

const useSortParams = params => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChange = sortKey => {
    const param = searchParams.get(sortKey)
    const order = param === null ? 'asc' : param === 'desc' ? null : 'desc'

    if (order === null) {
      searchParams.delete(sortKey)
      const prev = Object.fromEntries(searchParams)
      setSearchParams(() => ({ ...prev }))
    } else {
      const prev = Object.fromEntries(searchParams)
      setSearchParams(() => ({ ...prev, [sortKey]: order }))
    }
  }

  let requestParams = {}
  params.forEach(param => {
    if (searchParams.get(param) !== null) {
      requestParams[param + '_' + searchParams.get(param)] = 1
    }
  })

  return [handleChange, requestParams]
}

export default useSortParams
