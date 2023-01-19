import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import * as C from 'constants/sports'

import withFormProvider from 'HOCs/withFormProvider'
import { createFormData } from 'utils/createFormData'
import {
  useCreateSportMutation,
  useUpdateSportMutation
} from 'app/services/sport/sport'
import { clearCurrent } from 'features/currentSlice'
import { throwToast } from 'utils/throwToast'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'
import IconField from 'components/common/form/IconField'

const SportForm = ({ methods }) => {
  const { reset } = methods
  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)

  const [createSport] = useCreateSportMutation()
  const [updateSport] = useUpdateSportMutation()

  const onSubmit = data => {
    const body = createFormData(data)

    if (current) {
      const promise = updateSport({ id: current.id, body })
      throwToast(promise, 'Updating sport!', 'Sport updated!')
      dispatch(clearCurrent())
    } else {
      const promise = createSport(body).unwrap()
      throwToast(promise, 'Creating sport!', 'Sport created!')
      reset()
    }
  }

  useEffect(() => {
    if (current) {
      reset({
        [C.CATEGORY_SPORT_TITLE]: current.name,
        [C.CATEGORY_SPORT_ICON]: current.icons
      })
    } else {
      reset({
        [C.CATEGORY_SPORT_TITLE]: '',
        [C.CATEGORY_SPORT_ICON]: null
      })
    }
  }, [current])

  return (
    <Form id='categories-sport' onSubmit={onSubmit}>
      <Input type='text' label='Title' name={C.CATEGORY_SPORT_TITLE} />
      <IconField label='Icons' name={C.CATEGORY_SPORT_ICON} />
    </Form>
  )
}

const schema = yup.object({
  [C.CATEGORY_SPORT_TITLE]: yup.string().required('Title is required!')
})

export default withFormProvider(SportForm, schema)
