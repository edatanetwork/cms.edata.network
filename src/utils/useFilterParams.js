import { useSearchParams } from 'react-router-dom'

const useFilterParams = params => {
  const [searchParams] = useSearchParams()

  let requestParams = {}
  params.forEach(param => {
    if (searchParams.get(param) !== null) {
      requestParams[param] = searchParams.get(param)
    }
  })

  return [requestParams]
}

export default useFilterParams
