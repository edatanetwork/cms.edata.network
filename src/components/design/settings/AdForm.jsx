// import { useEffect } from 'react'

// import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'

import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// import { throwToast } from 'utils/throwToast'

// import { clearCurrent } from 'features/currentSlice'
// import { useCreateAdMutation, useUpdateAdMutation } from 'app/services/ads'

import Field from 'components/common/Field'
import { Form } from 'components/styled/common/Form.styled'
import { Input } from 'components/styled/common/Field.styled'
import { Textarea } from 'components/styled/common/Field.styled'
import { Dropdown } from 'components/styled/common/Dropdown.styled'

const schema = yup.object({
  zone: yup.string().required('Zone is required!'),
  browser: yup.string().required('Type is required!'),
  type: yup.string().required('Type is required!'),
  status: yup.string().required('Status is required!'),
  title: yup.string().required('Title is required!'),
  code: yup.string().required('Code is required!')
})

const AdForm = () => {
  // const dispatch = useDispatch()
  // const domain_id = useSelector(state => state.domain.domain_id)
  // const current = useSelector(state => state.current.current)

  // const [createAd] = useCreateAdMutation()
  // const [updateAd] = useUpdateAdMutation()

  const {
    // reset,
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    return data
  }

  return (
    <Form id='ad' onSubmit={handleSubmit(onSubmit)}>
      <Field label='Zone*' htmlFor='zone' error={errors.zone}>
        <Controller
          name='zone'
          control={control}
          render={({ field: { onChange } }) => (
            <Dropdown
              unstyled
              isClearable
              isSearchable={false}
              id='zone'
              classNamePrefix='select'
              placeholder='Select a zone'
              options={zones}
              onChange={option => onChange(option ? option.value : undefined)}
            />
          )}
        />
      </Field>

      <Field label='Browser*' htmlFor='browser' error={errors.browser}>
        <Controller
          name='browser'
          control={control}
          render={({ field: { onChange } }) => (
            <Dropdown
              unstyled
              isClearable
              isSearchable={false}
              id='browser'
              classNamePrefix='select'
              placeholder='Select a browser'
              options={browsers}
              onChange={option => onChange(option ? option.value : undefined)}
            />
          )}
        />
      </Field>

      <Field label='Type*' htmlFor='type' error={errors.type}>
        <Controller
          name='type'
          control={control}
          render={({ field: { onChange } }) => (
            <Dropdown
              unstyled
              isClearable
              isSearchable={false}
              id='type'
              classNamePrefix='select'
              placeholder='Select a type'
              options={types}
              onChange={option => onChange(option ? option.value : undefined)}
            />
          )}
        />
      </Field>

      <Field label='Status*' htmlFor='status' error={errors.status}>
        <Controller
          name='status'
          control={control}
          render={({ field: { onChange } }) => (
            <Dropdown
              unstyled
              isClearable
              isSearchable={false}
              id='status'
              classNamePrefix='select'
              placeholder='Select status'
              options={status}
              onChange={option => onChange(option ? option.value : undefined)}
            />
          )}
        />
      </Field>

      <Field label='Title' htmlFor='title' error={errors.title}>
        <Input id='title' placeholder='Enter ad title' {...register('title')} />
      </Field>

      <Field label='Code' htmlFor='code' error={errors.code}>
        <Textarea
          id='code'
          rows={5}
          placeholder='Enter code here'
          {...register('code')}
        />
      </Field>
    </Form>
  )
}

export default AdForm

const zones = [
  { label: 'All Pages', value: 'all_pages' },
  { label: 'Home', value: 'home' },
  { label: 'Post', value: 'post' },
  { label: 'Download', value: 'download' }
]

const status = [
  { label: 'Active', value: 1 },
  { label: 'Inactive', value: 0 }
]

const browsers = [
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' }
]

const types = [
  { label: 'Banner', value: 'banner' },
  { label: 'Invisible', value: 'invisible' },
  { label: 'Other', value: 'other' }
]
