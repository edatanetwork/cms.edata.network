import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

import withFormProvider from 'HOCs/withFormProvider'

// import { throwToast } from 'utils/throwToast'

import { clearCurrent } from 'features/currentSlice'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'
import Dropdown from 'components/common/form/Dropdown'
import Textarea from 'components/common/form/Textarea'

const schema = yup.object({
  zone: yup
    .string()
    .typeError('Zone is required!')
    .required('Zone is required!'),
  browsers: yup
    .string()
    .typeError('Type is required!')
    .required('Type is required!'),
  type: yup
    .string()
    .typeError('Type is required!')
    .required('Type is required!'),
  status: yup
    .boolean()
    .typeError('Status is required!')
    .required('Status is required!'),
  title: yup.string().required('Title is required!'),
  code: yup.string().required('Code is required!')
})

export default withFormProvider(({ methods: { reset } }) => {
  const dispatch = useDispatch()
  // const domain_id = useSelector(state => state.domain.domain_id)
  const current = useSelector(state => state.current.current)

  const onSubmit = data => {
    if (current) {
      // throwToast(promise, 'Updating Ad!', 'Ad updated!')
      dispatch(clearCurrent())
    } else {
      // throwToast(promise, 'Creating Ad!', 'Ad created!')
      reset()
    }
  }

  useEffect(() => {
    if (current) {
      reset({
        zone: current.zone,
        browsers: current.browsers,
        type: current.type,
        status: current.status,
        title: current.title,
        code: current.code
      })
    } else {
      reset({
        zone: null,
        browsers: null,
        type: null,
        status: null,
        title: '',
        code: ''
      })
    }
  }, [current])

  return (
    <Form id='ad' onSubmit={onSubmit}>
      <Dropdown
        label='Zone*'
        name='zone'
        placeholder='Select a zone'
        options={zones}
      />
      <Dropdown
        label='Browser*'
        name='browsers'
        placeholder='Select a browser'
        options={browsers}
      />
      <Dropdown
        label='Type*'
        name='type'
        placeholder='Select a type'
        options={types}
      />
      <Dropdown
        label='Status*'
        name='status'
        placeholder='Select status'
        options={status}
      />
      <Input
        label='Title*'
        name='title'
        type='text'
        placeholder='Enter title'
      />
      <Textarea
        label='Code*'
        rows={5}
        placeholder='Enter code here'
        name='code'
      />
    </Form>
  )
}, schema)

const zones = [
  { name: 'All Pages', id: 'all_pages' },
  { name: 'Home', id: 'home' },
  { name: 'Post', id: 'post' },
  { name: 'Download', id: 'download' }
]

const status = [
  { name: 'Active', id: true },
  { name: 'Inactive', id: false }
]

const browsers = [
  { name: 'Web', id: 'web' },
  { name: 'Mobile', id: 'mobile' }
]

const types = [
  { name: 'Banner', id: 'banner' },
  { name: 'Invisible', id: 'invisible' },
  { name: 'Other', id: 'other' }
]
