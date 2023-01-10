import { Controller } from 'react-hook-form'
import * as yup from 'yup'

import withFormMethods from 'HOCs/withFormMethods'

import Field from 'components/common/Field'
import SingleLogoField from 'components/common/SingleLogoField'
import { Form as StyledForm } from 'components/styled/common/Form.styled'
import { Input } from 'components/styled/common/Field.styled'

const schema = yup.object({
  title: yup.string().required()
})

const TeamForm = ({ methods }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = methods

  const onSubmit = data => {
    const body = createFormData(data)
    console.log(Object.fromEntries(body))
  }

  return (
    <StyledForm id='categories-team' onSubmit={handleSubmit(onSubmit)}>
      <Field label='Title' htmlFor='title' error={errors.title}>
        <Input id='title' type='text' {...register('title')} />
      </Field>
      <Controller
        name='images'
        control={control}
        render={({ field: { value, onChange } }) => (
          <SingleLogoField value={value} onChange={onChange} />
        )}
      />
    </StyledForm>
  )
}

export default withFormMethods(TeamForm, schema)

const createFormData = data => {
  const formData = new FormData()

  formData.append('title', data.title)

  if (data.images !== undefined && data.images !== null && data.images.preview)
    formData.append('images', data.images)

  return formData
}
