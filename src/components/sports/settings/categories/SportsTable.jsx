import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useGetSportsQuery, useDeleteSportMutation } from 'app/sport/sport'
import { setCurrent } from 'features/currentSlice'
import { removeConfirmation, throwToast } from 'utils/throwToast'

import Icon, { IconTypes } from 'components/common/Icon'
import EditDeleteButtons from 'components/common/EditDeleteButtons'
import { RoundButton } from 'components/styled/common/Button.styled'
import {
  TableWrapper,
  CategoryTable
} from 'components/styled/pages/sports/CategoryTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

const SportsTable = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { data, isLoading } = useGetSportsQuery()
  const [deleteSport] = useDeleteSportMutation()

  const handleDelete = id => {
    const promise = deleteSport(id).unwrap()
    throwToast(promise, 'Deleting sport!', 'Sport deleted!')
  }

  return (
    <TableWrapper>
      <CategoryTable>
        <Head>
          <Row>
            <Cell>Sport</Cell>
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
            data.sports.map(sport => (
              <Row key={sport.id}>
                <Cell>{sport.name}</Cell>
                <Cell>
                  <EditDeleteButtons
                    edit={() => dispatch(setCurrent(sport))}
                    remove={() =>
                      removeConfirmation(() => handleDelete(sport.id))
                    }
                  />
                </Cell>
              </Row>
            ))
          )}
        </Body>
      </CategoryTable>
      <div>
        <RoundButton onClick={() => navigate('/sports/settings/categories')}>
          <Icon type={IconTypes.plusCircle} />
          Add new
        </RoundButton>
      </div>
    </TableWrapper>
  )
}

export default SportsTable
