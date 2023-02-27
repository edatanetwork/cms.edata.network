import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as T from 'components/styled/Table.styled'

import { useId } from 'react'

const QueryErrorBoundary = ({
  children,
  isLoading,
  isSuccess,
  isError,
  isFetching,
  loadingColumns = '1fr'
}) => {
  if (isLoading || isFetching) {
    const ids = loadingColumns.split(' ').map(() => useId())
    return (
      <T.Body>
        <T.Row columns={loadingColumns}>
          {ids.map(id => (
            <T.Cell key={id}>
              <Skeleton containerClassName='skeleton' width='50%' />
            </T.Cell>
          ))}
        </T.Row>
      </T.Body>
    )
  } else if (isSuccess) {
    return children
  } else if (isError) {
    return <p>Something went wrong</p>
  }
}

export default QueryErrorBoundary
