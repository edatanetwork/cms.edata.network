import { useSearchParams } from 'react-router-dom'

import { useGetSearchedQuery } from 'app/services/searches'

import { formatDate } from 'utils/formatDate'

import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'
import ResourcesSearchedForm from 'features/resources/ResourcesSearchedForm'

import { Flex } from 'components/styled/common/Flex.styled'

import { DataTable } from 'components/ui/data-table'

const ResourcesSearchedPage = () => {
  const [searchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)
  const { data, isLoading } = useGetSearchedQuery(params)

  const columns = [
    { name: 'searched', field: 'search' },
    { name: 'result', field: 'count' },
    {
      name: 'domain',
      valueGetter: row => row.domain.name
    },
    { name: 'date', valueGetter: row => formatDate(row.created_at) }
  ]

  return (
    <>
      <Flex
        direction='column'
        style={{
          flexGrow: 1,
          overflowY: 'auto'
        }}
      >
        <Topbar />
        <DataTable
          loading={isLoading}
          columns={columns}
          rows={data?.searched}
          pagination={data?.pagination}
        />
      </Flex>
      <Sidebar title='Post'>
        <ResourcesSearchedForm />
      </Sidebar>
    </>
  )
}

export default ResourcesSearchedPage
