import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { throwToast } from 'utils/throwToast'

import { clearCurrent } from 'features/currentSlice'
import { useCreateTagMutation, useUpdateTagMutation } from 'app/services/tags'

import Field from 'components/common/Field'
import IconField from 'components/common/IconField'
import { Form } from 'components/styled/common/Form.styled'
import { Input } from 'components/styled/common/Field.styled'

const schema = yup.object({
  name: yup.string().required('Tag name is required!')
})

const TagForm = () => {
  const [thumbnail, setThumbnail] = useState([])

  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)
  const [createTag] = useCreateTagMutation()
  const [updateTag] = useUpdateTagMutation()

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    if (current) {
      const body = createFormData(data, thumbnail)
      const promise = updateTag({ id: current.id, body }).unwrap()
      throwToast(promise, 'Updating tag!', 'Tag updated!')
      dispatch(clearCurrent())
    } else {
      const body = createFormData(data, thumbnail)
      const promise = createTag(body).unwrap()
      throwToast(promise, 'Creating a tag!', 'Tag created successfully!')
      setThumbnail([])
      reset()
    }
  }

  useEffect(() => {
    if (current) {
      reset({ name: current.name })
      current.thumbnail && setThumbnail([{ preview: current.thumbnail }])
    } else {
      reset({ name: '' })
      setThumbnail([])
    }

    // eslint-disable-next-line
  }, [current])

  return (
    <Form id='tag' onSubmit={handleSubmit(onSubmit)}>
      <Field label='Tag name' htmlFor='tag' error={errors.name}>
        <Input
          id='name'
          type='text'
          placeholder='Enter tag name'
          {...register('name')}
        />
      </Field>
      <IconField files={thumbnail} setFiles={setThumbnail} />
    </Form>
  )
}

export default TagForm

const createFormData = (data, thumbnail) => {
  const formData = new FormData()

  for (const key in data) {
    formData.append(key, data[key])
  }

  thumbnail.length > 0 &&
    thumbnail[0].type &&
    formData.append('thumbnail', thumbnail[0])

  return formData
}
