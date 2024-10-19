import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { throwToast, removeConfirmation } from 'utils/throwToast'

import {
  useGetCategoriesQuery,
  useDeleteCategoryMutation
} from 'app/services/categories'
import { setCurrent } from 'features/currentSlice'
import { setParentId } from 'features/categorySlice'

import EditDeleteButtons from 'components/common/EditDeleteButtons'
import Icon, { IconTypes } from 'components/common/Icon'
import { RoundButton } from 'components/styled/common/Button.styled'

import {
  TableWrapper,
  CategoryTable
} from 'components/styled/pages/design/CategoryTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

const ResourcesCategoriesTable = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data, isLoading, isFetching } = useGetCategoriesQuery()
  const parent_id = useSelector(state => state.category.parent_id)

  const [deleteCategory] = useDeleteCategoryMutation()

  const handleDeleteCategory = id => {
    const promise = deleteCategory(id).unwrap()
    throwToast(promise, 'Deleting category!', 'Category deleted!')
  }

  useEffect(() => {
    if (!isLoading) {
      dispatch(setParentId(data[0].id))
    }
    // eslint-disable-next-line
  }, [isLoading])

  return (
    <TableWrapper>
      <CategoryTable>
        <Head>
          <Row>
            <Cell>Categories</Cell>
            <Cell>Posts</Cell>
          </Row>
        </Head>
        <Body>
          {isLoading || isFetching ? (
            <Row>
              <Cell>
                <Icon type={IconTypes.loading} />
              </Cell>
            </Row>
          ) : (
            data.map(el => (
              <Row
                key={el.id}
                active={parent_id === el.id}
                onClick={() => dispatch(setParentId(el.id))}
              >
                <Cell>{el.title}</Cell>
                <Cell>{el.posts_number}</Cell>
                <Cell>
                  <EditDeleteButtons
                    edit={() => dispatch(setCurrent(el))}
                    remove={() =>
                      removeConfirmation(() => handleDeleteCategory(el.id))
                    }
                  />
                </Cell>
              </Row>
            ))
          )}
        </Body>
      </CategoryTable>
      <RoundButton onClick={() => navigate('/resources/categories')}>
        <Icon type={IconTypes.plusCircle} />
        Add new
      </RoundButton>
    </TableWrapper>
  )
}

export default ResourcesCategoriesTable
