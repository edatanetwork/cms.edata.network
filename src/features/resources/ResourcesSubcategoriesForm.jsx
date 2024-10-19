import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { throwToast } from 'utils/throwToast'

import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation
} from 'app/services/categories'
import { clearCurrent } from 'features/currentSlice'

import Sidebar from 'layout/Sidebar'
import Field from 'components/common/Field'
import SingleIconField from 'components/common/SingleIconField'
import { Form } from 'components/styled/common/Form.styled'
import { Input } from 'components/styled/common/Field.styled'

const subCategorySchema = yup.object({
  title: yup.string().required('Title is required!'),
  color: yup
    .string()
    .required('Color is required!')
    .matches(
      /^#(?:[0-9a-fA-F]{3}){1,2}$/,
      'Color must be in HEX format: #000000'
    )
})

const ResourcesSubcategoriesForm = () => {
  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)
  const parent_id = useSelector(state => state.category.parent_id)
  const [createCategory] = useCreateCategoryMutation()
  const [updateCategory] = useUpdateCategoryMutation()

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(subCategorySchema)
  })

  const onSubmit = data => {
    if (current) {
      const body = createFormData(data, parent_id)
      const promise = updateCategory({
        id: current.id,
        body
      }).unwrap()
      throwToast(promise, 'Updating subcategory!', 'Subcategory created!')
      dispatch(clearCurrent())
    } else {
      const body = createFormData(data, parent_id)
      const promise = createCategory(body).unwrap()
      throwToast(promise, 'Creating subcategory!', 'Subcategory created!')
      reset()
    }
  }

  useEffect(() => {
    if (current) {
      reset({ title: current.title, color: current.color, icon: current.icon })
    } else {
      reset({ title: '', color: '', icon: null })
    }
  }, [current])

  return (
    <Sidebar title='Subcategory' form='subcategory'>
      <Form id='subcategory' onSubmit={handleSubmit(onSubmit)}>
        <Field label='Title*' htmlFor='title' error={errors.title}>
          <Input
            id='title'
            type='text'
            placeholder='Enter subcategory title'
            {...register('title')}
          />
        </Field>
        <Field label='Color (Hex)*' htmlFor='color' error={errors.color}>
          <Input
            id='color'
            type='text'
            placeholder='#'
            {...register('color')}
          />
        </Field>
        <Controller
          name='icon'
          control={control}
          render={({ field: { value, onChange } }) => (
            <SingleIconField value={value} onChange={onChange} />
          )}
        />
      </Form>
    </Sidebar>
  )
}

export default ResourcesSubcategoriesForm

const createFormData = (data, parent_id) => {
  const formData = new FormData()
  formData.append('parent_id', parent_id)
  formData.append('title', data.title)
  formData.append('color', data.color)

  if (data.icon !== undefined && data.icon !== null && data.icon.preview)
    formData.append('icon', data.icon)

  return formData
}
