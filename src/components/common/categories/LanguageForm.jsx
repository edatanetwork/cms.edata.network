import * as yup from 'yup'
import * as C from 'constants/sports'

import withFormProvider from 'HOCs/withFormProvider'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'

const LanguageForm = ({ methods }) => {
  const { reset } = methods

  const onSubmit = data => {
    console.log(data)
    reset()
  }

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
