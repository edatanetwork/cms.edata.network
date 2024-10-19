import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import toast from 'react-hot-toast'

import { setCredentials } from 'features/authSlice'
import { useLoginMutation } from 'app/services/auth'
import { useAuth } from 'hooks/useAuth'

import Login from 'components/styled/pages/Login.styled'
import Field from 'components/common/Field'
import { Input } from 'components/styled/common/Field.styled'
import Icon, { IconTypes } from 'components/common/Icon'

const schema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email!')
    .required('Please enter your email!'),
  password: yup
    .string()
    .required('Please enter your password!')
    .min(8, 'Password must be at least 8 characters')
})

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { user } = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async data => {
    try {
      const res = await login(data).unwrap()
      const authData = {
        user: {
          id: res.data.id,
          username: res.data.username,
          role: res.data.role
        },
        token: res.data.token
      }
      dispatch(setCredentials(authData))
      navigate('/resources/posts')
    } catch (error) {
      toast.error('Email or password is incorrect!')
    }
  }

  useEffect(() => {
    if (user) navigate('/resources/posts')
  }, [user])

  return (
    <Login>
      <Icon type={IconTypes.logo} />
      <p>Log into eData</p>
      <Login.Form onSubmit={handleSubmit(onSubmit)}>
        <Field error={errors.email}>
          <Input type='text' placeholder='Email' {...register('email')} />
        </Field>
        <Field error={errors.password}>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            {...register('password')}
          />
          <Icon
            onClick={() => setShowPassword(!showPassword)}
            type={showPassword ? IconTypes.eyeInvs : IconTypes.eye}
          />
        </Field>
        <button type='submit'>
          {isLoading ? <Icon type={IconTypes.loading} /> : 'Log In'}
        </button>
      </Login.Form>
    </Login>
  )
}

export default LoginPage
