import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import * as C from 'constants/sports'

import withFormProvider from 'HOCs/withFormProvider'
import { createFormData } from 'utils/createFormData'
import {
  useCreateLanguageMutation,
  useUpdateLanguageMutation
} from 'app/services/common/languages'
import { throwToast } from 'utils/throwToast'
import { clearCurrent } from 'features/currentSlice'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'

const LanguageForm = ({ methods }) => {
  const { reset } = methods
  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)
  const [createLangugage] = useCreateLanguageMutation()
  const [updateLanguage] = useUpdateLanguageMutation()

  const onSubmit = data => {
    const body = createFormData(data)

    if (current) {
      const promise = updateLanguage({ id: current.id, body })
      throwToast(promise, 'Updating language!', 'Language updated!')
      dispatch(clearCurrent())
    } else {
      const promise = createLangugage(body)
      throwToast(promise, 'Creating language!', 'Language created!')
      reset()
    }
  }

  useEffect(() => {
    if (current) {
      reset({
        [C.CATEGORY_LANGUAGE_TITLE]: current.name
      })
    } else {
      reset({
        [C.CATEGORY_LANGUAGE_TITLE]: ''
      })
    }
  }, [current])

  return (
    <Form id='categories-language' onSubmit={onSubmit}>
      <Input type='text' label='Title' name={C.CATEGORY_LANGUAGE_TITLE} />
    </Form>
  )
}

const schema = yup.object({
  [C.CATEGORY_LANGUAGE_TITLE]: yup.string().required('Title is required!')
})

export default withFormProvider(LanguageForm, schema)
