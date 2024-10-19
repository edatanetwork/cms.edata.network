import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { throwToast, removeConfirmation } from 'utils/throwToast'

import {
  useGetCategoriesQuery,
  useDeleteCategoryMutation
} from 'app/services/categories'
import { setCurrent } from 'features/currentSlice'

import EditDeleteButtons from 'components/common/EditDeleteButtons'
import Icon, { IconTypes } from 'components/common/Icon'
import { RoundButton } from 'components/styled/common/Button.styled'

import {
  TableWrapper,
  CategoryTable
} from 'components/styled/pages/design/CategoryTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

const ResourcesSubcategoriesTable = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data, isLoading, isFetching } = useGetCategoriesQuery()
  const parent_id = useSelector(state => state.category.parent_id)
  const current = useSelector(state => state.current.current)

  const [deleteCategory] = useDeleteCategoryMutation()

  const handleDeleteSubCategory = id => {
    const promise = deleteCategory(id).unwrap()
    throwToast(promise, 'Deleting subcategory!', 'Subategory deleted!')
  }

  return (
    <TableWrapper>
      <CategoryTable>
        <Head>
          <Row>
            <Cell>Subcategories</Cell>
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
            data
              .find(el => el.id === parent_id)
              ?.subcategories?.map(el => (
                <Row key={el.id} active={current && current.id === el.id}>
                  <Cell>{el.title}</Cell>
                  <Cell>{el.posts_number}</Cell>
                  <Cell>
                    <EditDeleteButtons
                      edit={async () => {
                        await navigate(
                          '/design/settings/categories/subcategory'
                        )
                        dispatch(setCurrent(el))
                      }}
                      remove={() =>
                        removeConfirmation(() => handleDeleteSubCategory(el.id))
                      }
                    />
                  </Cell>
                </Row>
              ))
          )}
        </Body>
      </CategoryTable>
      <RoundButton
        onClick={() => navigate('/resources/categories/subcategories')}
      >
        <Icon type={IconTypes.plusCircle} />
        Add new
      </RoundButton>
    </TableWrapper>
  )
}

export default ResourcesSubcategoriesTable
