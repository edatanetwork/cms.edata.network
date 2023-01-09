import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
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
  name: yup.string().required('Title is required!')
})

const ApplicationForm = () => {
  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)
  const [createApplication] = useCreateApplicationMutation()
  const [updateApplication] = useUpdateApplicationMutation()

  const [thumbnails, setThumbnails] = useState([])

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(applicationSchema)
  })

  const onSubmit = data => {
    if (current) {
      const body = createFormData(data, thumbnails)
      const promise = updateApplication({ id: current.id, body })
      throwToast(promise, 'Updating application!', 'Application updated!')
      dispatch(clearCurrent())
    } else {
      const body = createFormData(data, thumbnails)
      const promise = createApplication(body).unwrap()
      throwToast(promise, 'Creating application!', 'Application created!')
      reset()
      setThumbnails([])
    }
  }

  useEffect(() => {
    if (current) {
      reset({
        name: current.name
      })
      current.thumbnails
        ? setThumbnails([...current.thumbnails])
        : setThumbnails([])
    } else {
      reset({
        name: ''
      })
      setThumbnails([])
    }
    // eslint-disable-next-line
  }, [current])

  return (
    <Form id='application' onSubmit={handleSubmit(onSubmit)}>
      <Field label='Title' htmlFor='title' error={errors.name}>
        <Input id='title' placeholder='Enter app title' {...register('name')} />
      </Field>
      <IconField files={thumbnails} setFiles={setThumbnails} />
    </Form>
  )
}

export default ApplicationForm

const createFormData = (data, logo) => {
  const formData = new FormData()

  for (const key in data) {
    if (!Array.isArray(data[key]) && data[key] !== false) {
      formData.append(key, data[key])
    }
  }

  if (logo.length) {
    for (const i in logo) {
      if (logo[i].id) {
        formData.append(`thumbnails[${i}]`, logo[i].id)
      } else {
        formData.append(`thumbnails[${i}]`, logo[i])
      }
    }
  }

  return formData
}
