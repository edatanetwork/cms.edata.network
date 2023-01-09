import { useState, useEffect, useRef } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  useCreatePostMutation,
  useUpdatePostMutation,
  useValidateMutation
} from 'app/services/posts'
import {
  useGetCategoriesQuery,
  useGetApplicationsQuery
} from 'app/services/categories'
import { useGetRedirectsQuery } from 'app/services/redirect'
import { clearCurrent } from 'features/currentSlice'

import { throwToast } from 'utils/throwToast'

import Field from 'components/common/Field'
import FileUpload from 'components/common/DropFiles'
import ImageUpload from 'components/common/ImageUpload'
import { Form } from 'components/styled/common/Form.styled'
import { Input, Textarea } from 'components/styled/common/Field.styled'
import { Dropdown } from 'components/styled/common/Dropdown.styled'

const PostForm = () => {
  const [imageError, setImageError] = useState(false)
  const [categoryId, setCategoryId] = useState(null)
  const [images, setImages] = useState([])
  const [file, setFile] = useState([])

  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)

  const [createPost] = useCreatePostMutation()
  const [updatePost] = useUpdatePostMutation()

  const { data: categories, isLoading } = useGetCategoriesQuery()
  const { data: applications, isLoading: loadingApps } =
    useGetApplicationsQuery()
  const { data: redirects, isLoading: loadingRedirects } =
    useGetRedirectsQuery()

  const schema = yup.object({
    title: yup.string().required('Title is required!'),
    from: yup.string().url('Enter a valid url!').nullable(),
    description: yup.string().nullable(),
    category_id: yup
      .number()
      .typeError('Select a subcategory')
      .required('Select a subcategory'),
    application_id: yup
      .number()
      .typeError('Select an application')
      .required('Select an application'),
    post_download_link: yup
      .string()
      .required('Download url is required')
      .url('Please enter a valid URL!'),
    iframe_valid: yup.boolean(),
    redirect_id: yup
      .number()
      .typeError('Redirect is required!')
      .when('iframe_valid', {
        is: true,
        then: yup
          .number()
          .typeError('Redirect is required!')
          .required('Redirect is required!')
      })
  })

  const {
    reset,
    watch,
    control,
    register,
    setValue,
    getValues,
    unregister,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    if (images.length === 0) {
      setImageError(true)
    } else {
      if (current) {
        const body = createFormData({ data, images, file })
        const promise = updatePost({ id: current.id, body }).unwrap()
        throwToast(promise, 'Updating post!', 'Post updated!')
        dispatch(clearCurrent())
      } else {
        if (!fromError || !downloadLinkError) {
          const body = createFormData({ data, images, file })
          const promise = createPost(body).unwrap()
          throwToast(promise, 'Creating post!', 'Post created!')
          setCategoryId(null)
          setImages([])
          setFile([])
          setImageError(false)
          reset()
        }
      }
    }
    setFromError(null)
    setdownloadLinkError(null)
    setValue('iframe_valid', false)
  }

  const run = useRef(false)

  useEffect(() => {
    if (!run.current) {
      run.current = true
      return
    }

    if (current) {
      setCategoryId(current.category.id)
      reset({
        title: current.title,
        from: current.from,
        description: current.description,
        iframe_valid: current.iframe_valid,
        redirect_id: current.redirect.id,
        category_id: current.subcategory.id,
        application_id: current.application.id,
        post_download_link: current.download_link
      })
      current.post_images ? setImages([...current.post_images]) : setImages([])
    } else {
      setCategoryId(null)
      reset()
      reset({
        iframe_valid: false,
        category_id: null,
        application_id: null,
        redirect_id: null
      })
      setImages([])
    }
    // eslint-disable-next-line
  }, [current])

  useEffect(() => {
    if (images.length !== 0) {
      setImageError(false)
    }
  }, [images.length])

  const [fromError, setFromError] = useState(null)
  const [downloadLinkError, setdownloadLinkError] = useState(null)

  const [validate] = useValidateMutation()

  const validateFrom = async from => {
    try {
      await validate({ from }).unwrap()
      setFromError(null)
    } catch (error) {
      setFromError(error.data.message)
    }
  }

  const validateDownloadLink = async post_download_link => {
    try {
      await validate({ post_download_link }).unwrap()
      setdownloadLinkError(null)
    } catch (error) {
      setdownloadLinkError(error.data.message)
    }
  }

  useEffect(() => {
    if (current && current.from === watch('from')) {
      setFromError(null)
      return
    }

    validateFrom(watch('from'))
    // eslint-disable-next-line
  }, [current, watch('from')])

  useEffect(() => {
    if (current && current.download_link === watch('post_download_link')) {
      setdownloadLinkError(null)
      return
    }

    validateDownloadLink(watch('post_download_link'))
    // eslint-disable-next-line
  }, [current, watch('post_download_link')])

  useEffect(() => {
    if (!getValues('iframe_valid') && !loadingRedirects) {
      unregister('redirect_id')
    }
  }, [getValues('iframe_valid')])

  useEffect(() => {
    setValue('iframe_valid', false)
  }, [])

  const categoriesWithSubcategories = categories?.filter(
    category => category.subcategories
  )

  const subcategories = categoriesWithSubcategories?.find(
    category => category.id === categoryId
  )?.subcategories

  return (
    <Form id='post' onSubmit={handleSubmit(onSubmit)}>
      <Field label='Title*' htmlFor='title' error={errors.title}>
        <Input
          id='title'
          type='text'
          placeholder='Enter post title'
          {...register('title')}
        />
      </Field>
      <Field label='From' htmlFor='from' error={errors.from}>
        <Input
          id='from'
          type='text'
          placeholder='Enter from url'
          {...register('from')}
        />
        {fromError && <span>Duplicate</span>}
      </Field>
      <Field
        label='Description'
        htmlFor='description'
        error={errors.description}
      >
        <Textarea
          id='description'
          rows={3}
          placeholder='Enter post description'
          {...register('description')}
        />
      </Field>
      <Field
        error={errors.post_download_link}
        label='Download*'
        htmlFor='download'
      >
        <Input
          id='download'
          type='text'
          placeholder='Enter download url'
          {...register('post_download_link')}
        />
        {downloadLinkError && <span>Duplicate</span>}
        <Controller
          name='iframe_valid'
          control={control}
          render={({ field: { value, onChange } }) => (
            <input
              type='checkbox'
              defaultChecked={value}
              onChange={e => onChange(e.target.checked)}
            />
          )}
        />
      </Field>
      {(watch('post_download_link') !== '' ||
        watch('post_download_link') === undefined) && (
        <div style={{ overflow: 'hidden' }}>
          <iframe
            title='Download'
            src={watch('post_download_link')}
            style={{
              aspectRatio: '16 / 9',
              width: '105%',
              borderRadius: 5
            }}
          ></iframe>
        </div>
      )}
      <FileUpload maxFiles={1} files={file} setFiles={setFile} />

      {watch('iframe_valid') && (
        <Field label='Redirect*' htmlFor='redirect' error={errors.redirect_id}>
          <Controller
            name='redirect_id'
            control={control}
            render={({ field: { value, onChange } }) => (
              <Dropdown
                unstyled
                isClearable
                isSearchable={false}
                isLoading={loadingRedirects}
                classNamePrefix='select'
                placeholder='Select redirect'
                getOptionLabel={opt => opt.website}
                getOptionValue={opt => opt.id}
                options={redirects}
                value={
                  redirects?.find(opt => opt.id === value)
                    ? redirects.find(opt => opt.id === value)
                    : null
                }
                onChange={opt => onChange(opt ? opt.id : null)}
              />
            )}
          />
        </Field>
      )}

      <Field label='Category*' htmlFor='category'>
        <Dropdown
          unstyled
          isClearable
          isSearchable={false}
          isLoading={isLoading}
          classNamePrefix='select'
          placeholder='Select a category'
          getOptionLabel={opt => opt.title}
          getOptionValue={opt => opt.id}
          options={categoriesWithSubcategories}
          value={
            categoryId ? categories?.find(opt => opt.id === categoryId) : null
          }
          onChange={opt => setCategoryId(opt ? opt.id : null)}
        />
      </Field>
      <Field
        label='Subcategory*'
        htmlFor='subcategory'
        error={errors.category_id}
      >
        <Controller
          name='category_id'
          control={control}
          render={({ field: { value, onChange } }) => (
            <Dropdown
              unstyled
              isClearable
              isSearchable={false}
              id='subcategory'
              classNamePrefix='select'
              placeholder='Select a subcategory'
              noOptionsMessage={() => 'Choose a category first'}
              getOptionLabel={opt => opt.title}
              getOptionValue={opt => opt.id}
              options={subcategories}
              value={
                categoryId
                  ? subcategories.find(opt => opt.id === value)
                    ? subcategories.find(opt => opt.id === value)
                    : null
                  : null
              }
              onChange={opt => onChange(opt ? opt.id : null)}
            />
          )}
        />
      </Field>
      <Field
        label='Application*'
        htmlFor='application'
        error={errors.application_id}
      >
        <Controller
          name='application_id'
          control={control}
          render={({ field: { value, onChange } }) => (
            <Dropdown
              unstyled
              isClearable
              isSearchable={false}
              isLoading={loadingApps}
              id='application'
              classNamePrefix='select'
              placeholder='Select an application'
              getOptionLabel={opt => opt.name}
              getOptionValue={opt => opt.id}
              options={applications}
              value={
                applications?.find(opt => opt.id === value)
                  ? applications.find(opt => opt.id === value)
                  : null
              }
              onChange={opt => onChange(opt ? opt.id : null)}
            />
          )}
        />
      </Field>
      <ImageUpload error={imageError} images={images} setImages={setImages} />
    </Form>
  )
}

export default PostForm

const createFormData = ({ data, images, file }) => {
  const formData = new FormData()

  for (const key in data) {
    if (data[key] !== null) {
      formData.append(key, data[key])
    }
  }

  if (images.length) {
    for (const i in images) {
      if (images[i].id) {
        formData.append(`post_images[${i}]`, images[i].id)
      } else {
        formData.append(`post_images[${i}]`, images[i])
      }
    }
  }

  if (file.length) {
    formData.append('file', file[0])
  }

  return formData
}
