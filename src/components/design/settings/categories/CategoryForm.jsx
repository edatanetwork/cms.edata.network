import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { throwToast } from 'utils/throwToast'

import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation
} from 'app/services/categories'
import { clearCurrent } from 'features/currentSlice'

import { Form } from 'components/styled/common/Form.styled'
import Field from 'components/common/Field'
import { Input } from 'components/styled/common/Field.styled'

const categorySchema = yup.object({
  title: yup.string().required('Title is required!'),
  color: yup
    .string()
    .required('Color is required!')
    .matches(
      /^#(?:[0-9a-fA-F]{3}){1,2}$/,
      'Color must be in HEX format: #000000'
    )
})

const CategoryForm = () => {
  const dispatch = useDispatch()
  const [createCategory] = useCreateCategoryMutation()
  const [updateCategory] = useUpdateCategoryMutation()
  const current = useSelector(state => state.current.current)

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(categorySchema)
  })

  const onSubmit = data => {
    if (current) {
      const promise = updateCategory({ id: current.id, body: data }).unwrap()
      throwToast(promise, 'Updating category!', 'Category updated!')
      dispatch(clearCurrent())
    } else {
      const promise = createCategory(data).unwrap()
      throwToast(promise, 'Creating category!', 'Category created!')
      reset()
    }
  }

  useEffect(() => {
    if (current) {
      reset({
        title: current.title,
        color: current.color
      })
    } else {
      reset({
        title: '',
        color: ''
      })
    }
    // eslint-disable-next-line
  }, [current])

  return (
    <Form id='category' onSubmit={handleSubmit(onSubmit)}>
      <Field label='Title*' htmlFor='title' error={errors.title}>
        <Input
          id='title'
          type='text'
          placeholder='Enter category title'
          {...register('title')}
        />
      </Field>
      <Field label='Color (Hex)*' htmlFor='color' error={errors.color}>
        <Input id='color' type='text' placeholder='#' {...register('color')} />
      </Field>
    </Form>
  )
}

export default CategoryForm
