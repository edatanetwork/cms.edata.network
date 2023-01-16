import * as yup from 'yup'
import * as C from 'constants/sports'

import withFormProvider from 'HOCs/withFormProvider'
import { createFormData } from 'utils/createFormData'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'
import SingleLogoField from 'components/common/form/SingleLogoField'

const TeamForm = ({ methods }) => {
  const { reset } = methods

  const onSubmit = data => {
    const body = createFormData(data)
    console.log(Object.fromEntries(body))
    reset()
  }

  return (
    <Form id='categories-team' onSubmit={onSubmit}>
      <Input type='text' label='Title' name={C.CATEGORY_TEAM_TITLE} />
      <SingleLogoField label='Icon' name={C.CATEGORY_TEAM_ICON} />
    </Form>
  )
}

const schema = yup.object({
  [C.CATEGORY_TEAM_TITLE]: yup.string().required('Title is required!')
})

export default withFormProvider(TeamForm, schema)
