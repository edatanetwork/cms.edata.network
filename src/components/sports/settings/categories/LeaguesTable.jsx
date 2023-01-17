import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useGetLeaguesQuery, useDeleteLeagueMutation } from 'app/sport/leagues'
import { throwToast, removeConfirmation } from 'utils/throwToast'
import { setCurrent } from 'features/currentSlice'

import Icon, { IconTypes } from 'components/common/Icon'
import EditDeleteButtons from 'components/common/EditDeleteButtons'
import { RoundButton } from 'components/styled/common/Button.styled'
import {
  TableWrapper,
  CategoryTable
} from 'components/styled/pages/sports/CategoryTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

const LeaguesTable = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { data, isLoading } = useGetLeaguesQuery()
  const [deleteLeague] = useDeleteLeagueMutation()

  const handleDelete = id => {
    const promise = deleteLeague(id).unwrap()
    throwToast(promise, 'Deleting league!', 'League deleted!')
  }

  return (
    <TableWrapper>
      <CategoryTable>
        <Head>
          <Row>
            <Cell>Leagues</Cell>
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
            data.leagues.map(league => (
              <Row key={league.id}>
                <Cell>{league.name}</Cell>
                <Cell>
                  <EditDeleteButtons
                    edit={async () => {
                      await navigate('/sports/settings/categories/leagues')
                      dispatch(setCurrent(league))
                    }}
                    remove={() =>
                      removeConfirmation(() => handleDelete(league.id))
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
          onClick={() => navigate('/sports/settings/categories/leagues')}
        >
          <Icon type={IconTypes.plusCircle} />
          Add new
        </RoundButton>
      </div>
    </TableWrapper>
  )
}

export default LeaguesTable
