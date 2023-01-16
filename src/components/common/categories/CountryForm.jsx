import * as yup from 'yup'
import * as C from 'constants/sports'

import withFormProvider from 'HOCs/withFormProvider'
import { createFormData } from 'utils/createFormData'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'
import IconField from 'components/common/form/IconField'

const CountryForm = ({ methods }) => {
  const { reset } = methods

  const onSubmit = data => {
    const body = createFormData(data)
    console.log(Object.fromEntries(body))
    reset()
  }

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
