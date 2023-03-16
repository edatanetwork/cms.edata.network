import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import {
  selectUserById,
  useGetUsersQuery,
  useDeleteUserMutation
} from 'features/users/usersApiSlice'

import { formatDate } from 'utils/formatDate'
import { throwToast } from 'utils/throwToast'

import QueryErrorBoundary from 'components/common/QueryErrorBoundary'
import EditBtn from 'components/buttons/EditBtn'
import DeleteBtn from 'components/buttons/DeleteBtn'
import * as T from 'components/styled/Table.styled'

const UsersTable = () => {
  const { data, ...rest } = useGetUsersQuery()

  return (
    <T.Table>
      <T.Head>
        <T.Row columns='1.5fr 1fr 0.5fr 0.5fr 0.5fr 0.5fr'>
          <T.Cell>User</T.Cell>
          <T.Cell>Email</T.Cell>
          <T.Cell>Posts</T.Cell>
          <T.Cell>Role</T.Cell>
          <T.Cell>Created Date</T.Cell>
        </T.Row>
      </T.Head>
      <QueryErrorBoundary {...rest} loadingColumns='1.5fr 1fr 0.5fr 0.5fr 1fr'>
        <T.Body>
          {data?.ids?.map(id => (
            <UserRow key={id} userId={id} />
          ))}
        </T.Body>
      </QueryErrorBoundary>
    </T.Table>
  )
}

const UserRow = ({ userId }) => {
  const { id } = useParams()
  const user = useSelector(state => selectUserById(state, userId))

  const [deleteUser] = useDeleteUserMutation()

  const handleDelete = () => {
    throwToast(
      deleteUser({ userId }).unwrap(),
      'Deleting user!',
      'User deleted!'
    )
  }

  return (
    <T.Row
      active={id === userId.toString()}
      columns='1.5fr 1fr 0.5fr 0.5fr 0.5fr 0.5fr'
    >
      <T.Cell>{user.username}</T.Cell>
      <T.Cell>{user.email}</T.Cell>
      <T.Cell>{user.posts_number}</T.Cell>
      <T.Cell opacity='0.5'>{user.role}</T.Cell>
      <T.Cell opacity='0.5'>{formatDate(user.created_at)}</T.Cell>
      <T.Cell gap='0.5rem' justify='end'>
        <EditBtn path={`/users/edit/${userId}`} />
        <DeleteBtn deleteFn={handleDelete} />
      </T.Cell>
    </T.Row>
  )
}

export default UsersTable
