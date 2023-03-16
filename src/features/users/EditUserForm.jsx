import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import * as yup from 'yup'

import withFormProvider from 'HOCs/withFormProvider'

import { throwToast } from 'utils/throwToast'

import {
  useUpdateUserMutation,
  selectUserById
} from 'features/users/usersApiSlice'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'
import Dropdown from 'components/common/form/Dropdown'

const EditUserForm = ({ methods }) => {
  const navigate = useNavigate()
  const { reset } = methods
  const { id } = useParams()
  const user = useSelector(state => selectUserById(state, id))
  const [updateUser, { isSuccess }] = useUpdateUserMutation()

  const handleSubmit = async data => {
    const promise = updateUser(data).unwrap()
    throwToast(promise, 'Updating user!', 'User updated!')
  }

  useEffect(() => {
    if (isSuccess) {
      reset()
      navigate('/users')
    }
  }, [isSuccess])

  useEffect(() => {
    reset(user)
  }, [user])

  return (
    <div>
      <Form id='update-user' onSubmit={handleSubmit}>
        <Input
          label='Username'
          name='username'
          type='text'
          placeholder='Username'
        />
        <Input label='Email' name='email' type='text' placeholder='Email' />
        <Input
          label='Password'
          name='password'
          type='password'
          placeholder='Password'
        />
        <Input
          label='Password Confirmation'
          name='confirm_password'
          type='password'
          placeholder='Confirm password'
        />
        <Dropdown
          label='Role'
          name='role'
          placeholder='Role'
          options={[
            { id: 'user', name: 'User' },
            { id: 'admin', name: 'Admin' }
          ]}
        />
      </Form>
    </div>
  )
}

const schema = yup.object({
  username: yup
    .string()
    .required('Username is required!')
    .min(4, 'At least 4 characters!')
    .matches(/^[aA-zZ]+$/, 'Only Latin letters allowed!'),
  email: yup
    .string()
    .required('Email is required!')
    .email('Not a valid email!'),
  password: yup
    .string()
    .required('Password is required!')
    .min(8, 'At least 8 characters!'),
  confirm_password: yup
    .string()
    .required('Confirmation is required!')
    .equals([yup.ref('password')], 'Passwords must match!'),
  role: yup.string().required('Roles is required!')
})

export default withFormProvider(EditUserForm, schema)
