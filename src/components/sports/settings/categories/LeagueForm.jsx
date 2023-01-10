import * as yup from 'yup'

import withFormMethods from 'HOCs/withFormMethods'

import Field from 'components/common/Field'
import { Form } from 'components/styled/common/Form.styled'
import { Input } from 'components/styled/common/Field.styled'

const LeagueForm = ({ methods }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = methods

  const onSubmit = data => console.log(data)

  return (
    <Form id='categories-league' onSubmit={handleSubmit(onSubmit)}>
      <Field label='Name' htmlFor='name' error={errors.name}>
        <Input id='name' type='text' {...register('name')} />
      </Field>
    </Form>
  )
}

const schema = yup.object({
  name: yup.string().required('Name is required!')
})

export default withFormMethods(LeagueForm, schema)
