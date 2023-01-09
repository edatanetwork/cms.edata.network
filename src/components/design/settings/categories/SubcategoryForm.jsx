import { useEffect, useState } from 'react'
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

import Field from 'components/common/Field'
import IconField from 'components/common/IconField'
import { Form } from 'components/styled/common/Form.styled'
import { Input } from 'components/styled/common/Field.styled'

const subCategorySchema = yup.object({
  title: yup.string().required('Title is required!')
})

const SubcategoryForm = () => {
  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)
  const parent_id = useSelector(state => state.category.parent_id)
  const [createCategory] = useCreateCategoryMutation()
  const [updateCategory] = useUpdateCategoryMutation()

  const [icons, setIcons] = useState([])

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(subCategorySchema)
  })

  const onSubmit = data => {
    if (current) {
      if (icons.preview.includes('blob')) {
        const formData = new FormData()
        for (const key in data) {
          formData.append(key, data[key])
        }
        if (icons) {
          formData.append('icons', icons)
        }
        const promise = updateCategory({
          id: current.id,
          body: formData
        }).unwrap()
        throwToast(promise, 'Updating subcategory!', 'Subcategory created!')
        reset()
        setIcons(null)
      } else {
        const promise = updateCategory({ id: current.id, body: data }).unwrap()
        throwToast(promise, 'Updating subcategory!', 'Subcategory updated!')
        reset()
        dispatch(clearCurrent())
      }
    } else {
      const formData = new FormData()
      for (const key in data) {
        formData.append(key, data[key])
      }
      if (icons) {
        formData.append('icons', icons)
      }
      formData.append('parent_id', parent_id)
      const promise = createCategory(formData).unwrap()
      throwToast(promise, 'Creating subcategory!', 'Subcategory created!')
      reset()
      setIcons([])
    }
  }

  useEffect(() => {
    if (current) {
      reset({ title: current.title })
      setIcons(current.icon === null ? null : { preview: current.icon })
    } else {
      reset({ title: '' })
      setIcons([])
    }
  }, [current])

  return (
    <Form id='subcategory' onSubmit={handleSubmit(onSubmit)}>
      <Field label='Title*' htmlFor='title' error={errors.title}>
        <Input
          id='title'
          type='text'
          placeholder='Enter subcategory title'
          {...register('title')}
        />
      </Field>
      <IconField files={icons} setFiles={setIcons} />
    </Form>
  )
}

export default SubcategoryForm
