import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

import { clearCurrent } from 'features/currentSlice'
import { throwToast } from 'utils/throwToast'

import withFormProvider from 'HOCs/withFormProvider'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'

const GenreForm = ({ methods: { reset }, create, update }) => {
  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)

  const onSubmit = data => {
    if (current) {
      const promise = update({ id: current.id, body: data }).unwrap()
      throwToast(promise, 'Updating genre!', 'Genre updated!')
      dispatch(clearCurrent())
    } else {
      const promise = create(data).unwrap()
      throwToast(promise, 'Creating genre!', 'Genre created!')
      reset()
    }
  }

  useEffect(() => {
    current ? reset({ name: current.name }) : reset({ name: '' })
  }, [current])

  return (
    <Form id='categories-genre' onSubmit={onSubmit}>
      <Input label='Title' name='name' type='text' placeholder='Enter title' />
    </Form>
  )
}

const schema = yup.object({
  name: yup.string().required('Title is required!')
})

export default withFormProvider(GenreForm, schema)
