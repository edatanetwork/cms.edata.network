import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {
  useCreateDomainMutation,
  useUpdateDomainMutation
} from 'app/services/common/domains'
import { useGetCategoriesQuery } from 'app/services/categories'
import { clearCurrent } from 'features/currentSlice'

import { throwToast } from 'utils/throwToast'

import Field from 'components/common/Field'
import Select from 'components/common/Select'
import Grid from 'components/styled/common/Grid.styled'
import { Option } from 'components/styled/common/Select.styled'
import { Form } from 'components/styled/common/Form.styled'
import { Input } from 'components/styled/common/Field.styled'
import Icon, { IconTypes } from 'components/common/Icon'

const domainSchema = yup.object({
  name: yup.string().required('Name is required!'),
  url: yup
    .string()
    .required('URL is required!')
    .matches(
      /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/,
      'Please enter a valid URL!'
    )
})

const DomainForm = () => {
  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)

  const { data, isLoading } = useGetCategoriesQuery()
  const [createDomain] = useCreateDomainMutation()
  const [updateDomain] = useUpdateDomainMutation()

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(domainSchema)
  })

  const onSubmit = data => {
    if (current) {
      const body = createFormData({ data })
      const promise = updateDomain({ id: current.id, body }).unwrap()
      throwToast(promise, 'Updating domain!', 'Domain updated!')
      dispatch(clearCurrent())
    } else {
      const body = createFormData({ ...data, type: 'posts' })
      const promise = createDomain(body).unwrap()
      throwToast(promise, 'Creating domain!', 'Domain created!')
      reset()
    }
  }

  useEffect(() => {
    if (current) {
      reset({
        name: current.name,
        url: current.url,
        subcategories:
          current.subcategories &&
          current.subcategories.map(item => item.id.toString())
      })
    } else {
      reset({
        name: '',
        url: ''
      })
    }

    // eslint-disable-next-line
  }, [current])

  return (
    <Form id='domain' onSubmit={handleSubmit(onSubmit)}>
      <Field label='Domain Name' htmlFor='name' error={errors.name}>
        <Input
          id='name'
          type='text'
          placeholder='Enter domain name'
          {...register('name')}
        />
      </Field>
      <Field label='Domain URL' htmlFor='url' error={errors.url}>
        <Input
          id='url'
          type='text'
          placeholder='Enter domain URL'
          {...register('url')}
        />
      </Field>
      <Grid gap='0.25rem'>
        <p>Select subcategories</p>
        {isLoading ? (
          <Icon type={IconTypes.loading} />
        ) : (
          data
            .filter(category => category.subcategories)
            .map(category => (
              <Select
                key={category.id}
                title={category.title}
                count={category.subcategories.length}
              >
                {category.subcategories.map(({ id, title, posts_number }) => (
                  <Option key={id}>
                    <p>
                      {title}
                      <span>{posts_number}</span>
                    </p>
                    <input
                      type='checkbox'
                      value={id}
                      {...register(`subcategories`)}
                    />
                  </Option>
                ))}
              </Select>
            ))
        )}
      </Grid>
    </Form>
  )
}

export default DomainForm

const createFormData = data => {
  const formData = new FormData()

  for (const key in data) {
    if (!Array.isArray(data[key]) && data[key] !== false) {
      formData.append(key, data[key])
    }

    if (Array.isArray(data[key]) && data[key] !== false) {
      for (const k of data[key]) {
        formData.append('subcategories[]', k)
      }
    }
  }

  return formData
}
