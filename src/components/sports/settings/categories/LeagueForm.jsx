import * as yup from 'yup'
import * as C from 'constants/sports'

import withFormProvider from 'HOCs/withFormProvider'
import { createFormData } from 'utils/createFormData'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'
import SingleLogoField from 'components/common/form/SingleLogoField'

const LeagueForm = ({ methods }) => {
  const { reset } = methods

  const onSubmit = data => {
    const body = createFormData(data)
    console.log(Object.fromEntries(body))
    reset()
  }

  return (
    <Form id='categories-league' onSubmit={onSubmit}>
      <Input type='text' label='Title' name={C.CATEGORY_LEAGUE_TITLE} />
      <SingleLogoField label='Logo' name={C.CATEGORY_LEAGUE_ICON} />
    </Form>
  )
}

const schema = yup.object({
  [C.CATEGORY_LEAGUE_TITLE]: yup.string().required('Name is required!')
})

export default withFormProvider(LeagueForm, schema)
