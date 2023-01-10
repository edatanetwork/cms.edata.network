import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Field from 'components/common/Field'
import IconField from 'components/common/IconField'
import { Form } from 'components/styled/common/Form.styled'
import { Input } from 'components/styled/common/Field.styled'

const schema = yup.object({
  title: yup.string().required('Title is required!')
})

const SportForm = () => {
  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const body = createFormData(data)
    console.log(Object.fromEntries(body))
  }

  return (
    <Form id='categories-sport' onSubmit={handleSubmit(onSubmit)}>
      <Field label='Title*' htmlFor='title' error={errors.title}>
        <Input id='title' type='text' {...register('title')} />
      </Field>
      <Controller
        name='icons'
        control={control}
        render={({ field: { value, onChange } }) => (
          <IconField value={value} onChange={onChange} watch={watch} />
        )}
      />
    </Form>
  )
}

export default SportForm

const createFormData = data => {
  const formData = new FormData()

  formData.append('title', data.title)

  data.icons.forEach((icon, i) => {
    if (icon.id) {
      formData.append(`icons[${i}]`, icon.id)
    } else {
      formData.append(`icons[${i}]`, icon)
    }
  })

  return formData
}
