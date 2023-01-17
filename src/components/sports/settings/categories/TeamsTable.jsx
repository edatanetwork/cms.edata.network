import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setCurrent } from 'features/currentSlice'
import { useGetTeamsQuery, useDeleteTeamMutation } from 'app/sport/teams'
import { throwToast, removeConfirmation } from 'utils/throwToast'

import Icon, { IconTypes } from 'components/common/Icon'
import EditDeleteButtons from 'components/common/EditDeleteButtons'
import { RoundButton } from 'components/styled/common/Button.styled'
import {
  TableWrapper,
  CategoryTable
} from 'components/styled/pages/sports/CategoryTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

const TeamsTable = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { data, isLoading } = useGetTeamsQuery()
  const [deleteTeam] = useDeleteTeamMutation()

  const handleDelete = id => {
    const promise = deleteTeam(id).unwrap()
    throwToast(promise, 'Deleting team!', 'Team deleted!')
  }

  return (
    <TableWrapper>
      <CategoryTable>
        <Head>
          <Row>
            <Cell>Teams</Cell>
          </Row>
        </Head>
        <Body>
          {isLoading ? (
            <Row>
              <Cell>
                <Icon type={IconTypes.loading} />
              </Cell>
            </Row>
          ) : (
            data.teams.map(team => (
              <Row key={team.id}>
                <Cell>{team.name}</Cell>
                <Cell>
                  <EditDeleteButtons
                    edit={async () => {
                      await navigate('/sports/settings/categories/teams')
                      dispatch(setCurrent(team))
                    }}
                    remove={() =>
                      removeConfirmation(() => handleDelete(team.id))
                    }
                  />
                </Cell>
              </Row>
            ))
          )}
        </Body>
      </CategoryTable>
      <div>
        <RoundButton
          onClick={() => navigate('/sports/settings/categories/teams')}
        >
          <Icon type={IconTypes.plusCircle} />
          Add new
        </RoundButton>
      </div>
    </TableWrapper>
  )
}

export default TeamsTable
