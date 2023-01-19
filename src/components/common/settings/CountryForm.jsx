import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import * as C from 'constants/sports'

import withFormProvider from 'HOCs/withFormProvider'
import { createFormData } from 'utils/createFormData'
import { throwToast } from 'utils/throwToast'
import { clearCurrent } from 'features/currentSlice'
import {
  useUpdateCountryMutation,
  useCreateCountryMutation
} from 'app/common/countries'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'
import IconField from 'components/common/form/IconField'

const CountryForm = ({ methods }) => {
  const { reset } = methods
  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)
  const [createCountry] = useCreateCountryMutation()
  const [updateCountry] = useUpdateCountryMutation()

  const onSubmit = data => {
    const body = createFormData(data)

    if (current) {
      const promise = updateCountry({ id: current.id, body }).unwrap()
      throwToast(promise, 'Updating country!', 'Country updated!')
      dispatch(clearCurrent())
    } else {
      const promise = createCountry(body).unwrap()
      throwToast(promise, 'Creating country!', 'Country created!')
      reset()
    }
  }

  useEffect(() => {
    if (current) {
      reset({
        [C.CATEGORY_COUNTRY_TITLE]: current.name,
        [C.CATEGORY_COUNTRY_ICON]: current.flags
      })
    } else {
      reset({
        [C.CATEGORY_COUNTRY_TITLE]: '',
        [C.CATEGORY_COUNTRY_ICON]: null
      })
    }
  }, [current])

  return (
    <Form id='categories-country' onSubmit={onSubmit}>
      <Input type='text' label='Title' name={C.CATEGORY_COUNTRY_TITLE} />
      <IconField label='Icons' name={C.CATEGORY_COUNTRY_ICON} />
    </Form>
  )
}

const schema = yup.object({
  [C.CATEGORY_COUNTRY_TITLE]: yup.string().required('Title is required!')
})

export default withFormProvider(CountryForm, schema)
