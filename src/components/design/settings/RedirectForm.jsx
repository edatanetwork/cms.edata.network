import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useDropzone } from 'react-dropzone'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { clearCurrent } from 'features/currentSlice'
import { generateImageUrl } from 'utils/generateImageUrl'
import { throwToast } from 'utils/throwToast'

import {
  useCreateRedirectMutation,
  useUpdateRedirectMutation
} from 'app/services/redirect'

import Field from 'components/common/Field'
import Icon, { IconTypes } from 'components/common/Icon'
import { Form } from 'components/styled/common/Form.styled'
import { Input } from 'components/styled/common/Field.styled'
import { CircleButton } from 'components/styled/common/Button.styled'

const schema = yup.object({
  website: yup.string().required('Website is required!'),
  url: yup.string().url('Enter a valid url!').required('URL is required!'),
  logo: yup.mixed().required('Logo is required!')
})

const RedirectForm = () => {
  const dispatch = useDispatch()
  const [createRedirect] = useCreateRedirectMutation()
  const [updateRedirect] = useUpdateRedirectMutation()
  const current = useSelector(state => state.current.current)

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    if (current) {
      const body = createFormData(data)
      const promise = updateRedirect({ id: current.id, body }).unwrap()
      throwToast(promise, 'Updating redirect!', 'Redirect updated!')
      dispatch(clearCurrent())
    } else {
      const body = createFormData(data)
      const promise = createRedirect(body).unwrap()
      throwToast(promise, 'Creating redirect!', 'Redirect created!')
      reset()
    }
  }

  useEffect(() => {
    if (current) {
      reset({
        website: current.website,
        url: current.url,
        logo: current.logo
      })
    } else {
      reset({
        website: '',
        url: '',
        logo: null
      })
    }
  }, [current])

  return (
    <Form id='redirect' onSubmit={handleSubmit(onSubmit)}>
      <Field label='Website' htmlFor='website' error={errors.website}>
        <Input type='text' id='website' {...register('website')} />
      </Field>
      <Field label='URL' htmlFor='url' error={errors.url}>
        <Input type='text' id='url' {...register('url')} />
      </Field>
      <Controller
        name='logo'
        control={control}
        render={({ field: { value, onChange } }) => (
          <Logo
            value={value}
            onChange={file => onChange(file)}
            clearValue={() => setValue('logo', null)}
          />
        )}
      />
    </Form>
  )
}

export default RedirectForm

const createFormData = data => {
  const formData = new FormData()

  for (const key in data) {
    formData.append(key, data[key])

    if (!data['logo'].preview) {
      formData.delete('logo')
    }
  }

  return formData
}

const Logo = ({ value, onChange, clearValue }) => {
  const onDrop = useCallback(acceptedFile => {
    onChange(
      Object.assign(acceptedFile[0], {
        preview: URL.createObjectURL(acceptedFile[0])
      })
    )
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1
  })

  return (
    <div>
      <p
        style={{
          fontSize: 12,
          color: 'rgba(0,0,0, .5)',
          marginBottom: 4
        }}
      >
        Logo
      </p>
      {value ? (
        <div
          style={{
            position: 'relative',
            border: '2px dashed #EBEEF1',
            borderRadius: 4,
            display: 'grid',
            placeContent: 'center',
            paddingBlock: '1.25rem'
          }}
        >
          <img
            style={{ width: 100 }}
            src={
              value.preview ? value.preview : generateImageUrl({ src: value })
            }
            alt=''
          />
          <CircleButton
            type='button'
            onClick={clearValue}
            style={{ position: 'absolute', top: '1rem', right: '1rem' }}
          >
            <Icon type={IconTypes.cross} />
          </CircleButton>
        </div>
      ) : (
        <div
          {...getRootProps()}
          style={{
            border: '2px dashed #EBEEF1',
            borderRadius: 4,
            cursor: 'pointer'
          }}
        >
          <input {...getInputProps()} />
          <p
            style={{
              fontSize: 14,
              color: 'rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              justifyContent: 'center',
              height: 60
            }}
          >
            <Icon style={{ width: 20 }} type={IconTypes.camera} />
            Drag and drop photo
          </p>
        </div>
      )}
    </div>
  )
}
