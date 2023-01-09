import { useEffect } from 'react'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import {
  useCreateApplicationMutation,
  useUpdateApplicationMutation
} from 'app/services/categories'
import { clearCurrent } from 'features/currentSlice'
import { throwToast } from 'utils/throwToast'

import Field from 'components/common/Field'
import IconField from 'components/common/IconField'
import { Form } from 'components/styled/common/Form.styled'
import { Input } from 'components/styled/common/Field.styled'

const applicationSchema = yup.object({
  name: yup.string().required('Name is required!'),
  color: yup
    .string()
    .required('Color is required!')
    .matches(
      /^#(?:[0-9a-fA-F]{3}){1,2}$/,
      'Color must be in HEX format: #000000'
    )
})

const ApplicationForm = () => {
  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)
  const [createApplication] = useCreateApplicationMutation()
  const [updateApplication] = useUpdateApplicationMutation()

  const {
    reset,
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(applicationSchema)
  })

  const onSubmit = data => {
    if (current) {
      const body = createFormData(data)
      const promise = updateApplication({ id: current.id, body })
      throwToast(promise, 'Updating application!', 'Application updated!')
      dispatch(clearCurrent())
    } else {
      const body = createFormData(data)
      const promise = createApplication(body).unwrap()
      throwToast(promise, 'Creating application!', 'Application created!')
      reset()
    }
  }

  useEffect(() => {
    if (current) {
      reset({
        name: current.name,
        color: current.color,
        icons: current.thumbnails
      })
    } else {
      reset({
        name: '',
        color: '',
        icons: []
      })
    }
    // eslint-disable-next-line
  }, [current])

  return (
    <Form id='application' onSubmit={handleSubmit(onSubmit)}>
      <Field label='Name' htmlFor='name' error={errors.name}>
        <Input id='name' placeholder='Enter app title' {...register('name')} />
      </Field>
      <Field label='Color (Hex)*' htmlFor='color' error={errors.color}>
        <Input id='color' type='text' placeholder='#' {...register('color')} />
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

export default ApplicationForm

const createFormData = data => {
  const formData = new FormData()

  formData.append('name', data.name)
  formData.append('color', data.color)
  data.icons.forEach((icon, i) => {
    if (icon.id) {
      formData.append(`thumbnails[${i}]`, icon.id)
    } else {
      formData.append(`thumbnails[${i}]`, icon)
    }
  })

  return formData
}
