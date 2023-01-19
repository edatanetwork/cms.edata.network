import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  useGetLanguagesQuery,
  useDeleteLanguageMutation
} from 'app/common/languages'
import { throwToast, removeConfirmation } from 'utils/throwToast'

import Icon, { IconTypes } from 'components/common/Icon'
import EditDeleteButtons from 'components/common/EditDeleteButtons'
import { RoundButton } from 'components/styled/common/Button.styled'
import {
  TableWrapper,
  CategoryTable
} from 'components/styled/pages/tv/CategoryTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'
import { setCurrent } from 'features/currentSlice'

const LanguagesTable = ({ to }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)
  const [deleteLanguage] = useDeleteLanguageMutation()
  const { data, isLoading } = useGetLanguagesQuery()

  const handleDelete = id => {
    const promise = deleteLanguage(id).unwrap()
    throwToast(promise, 'Deleting language!', 'Language deleted!')
  }

  return (
    <TableWrapper>
      <CategoryTable>
        <Head>
          <Row>
            <Cell>Languages</Cell>
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
            data.languages.map(language => (
              <Row key={language.id} active={current?.id === language.id}>
                <Cell>{language.name}</Cell>
                <Cell>
                  <EditDeleteButtons
                    edit={async () => {
                      await navigate(`/${to}/settings/categories/languages`)
                      dispatch(setCurrent(language))
                    }}
                    remove={() =>
                      removeConfirmation(() => handleDelete(language.id))
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
          onClick={() => navigate(`/${to}/settings/categories/languages`)}
        >
          <Icon type={IconTypes.plusCircle} />
          Add new
        </RoundButton>
      </div>
    </TableWrapper>
  )
}

export default LanguagesTable
