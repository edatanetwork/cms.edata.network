import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { useGetSportsQuery, useDeleteSportMutation } from 'app/sport/sport'
import { setCurrent } from 'features/currentSlice'
import { setSportId } from 'features/filterSlice'
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
  const sportId = useSelector(state => state.filter.sportId)

  const { data, isLoading } = useGetSportsQuery()
  const [deleteSport] = useDeleteSportMutation()

  const handleDelete = id => {
    const promise = deleteSport(id).unwrap()
    throwToast(promise, 'Deleting sport!', 'Sport deleted!')
  }

  useEffect(() => {
    if (!isLoading) {
      dispatch(setSportId(data.sports[0]?.id))
    }
  }, [isLoading])

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
              <Row
                key={sport.id}
                active={sport.id === sportId}
                onClick={() => dispatch(setSportId(sport.id))}
              >
                <Cell>{sport.name}</Cell>
                <Cell>
                  <EditDeleteButtons
                    edit={async () => {
                      await navigate('/sports/settings/categories')
                      dispatch(setCurrent(sport))
                    }}
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
