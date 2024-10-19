import { useGetPostsQuery } from 'app/services/posts'

import { formatDate } from 'utils/formatDate'

import Topbar from 'layout/Topbar'
import Filterbar from 'layout/Filterbar'
import Sidebar from 'layout/Sidebar'

import ResourcesPostForm from 'features/resources/ResourcesPostForm'

import { Flex } from 'components/styled/common/Flex.styled'

import { DataTable } from 'components/ui/data-table'

const ResourcesPostsPage = () => {
  const { data, isLoading, isFetching } = useGetPostsQuery()

  const columns = [
    { name: 'title', field: 'title' },
    { name: 'downloads', field: 'downloads' },
    { name: 'category', valueGetter: row => row.category.title },
    { name: 'author', field: 'author' },
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
        <Filterbar />
        <DataTable
          rowHasImage
          loading={isLoading || isFetching}
          columns={columns}
          rows={data?.posts}
          pagination={data?.pagination}
        />
      </Flex>
      <Sidebar title='Post' form='post'>
        <ResourcesPostForm />
      </Sidebar>
    </>
  )
}

export default ResourcesPostsPage
