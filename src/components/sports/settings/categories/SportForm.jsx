import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Field from 'components/common/Field'
import { Form } from 'components/styled/common/Form.styled'
import { Input } from 'components/styled/common/Field.styled'

const schema = yup.object({
  title: yup.string().required('Title is required!')
})

const SportForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <Form id='categories-sport' onSubmit={handleSubmit(onSubmit)}>
      <Field label='Title*' htmlFor='title' error={errors.title}>
        <Input id='title' type='text' {...register('title')} />
      </Field>
    </Form>
  )
}

export default SportForm
