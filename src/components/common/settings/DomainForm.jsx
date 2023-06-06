import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

import withFormProvider from 'HOCs/withFormProvider'

import { useGetSportsQuery } from 'app/services/sport/sport'
import { useGetMovieGenresQuery } from 'app/services/movie/genre'
import { useGetTvGenresQuery } from 'app/services/tv/genre'
import {
  useCreateDomainMutation,
  useUpdateDomainMutation
} from 'app/services/common/domains'
import { createFormData } from 'utils/createFormData'
import { clearCurrent } from 'features/currentSlice'
import { throwToast } from 'utils/throwToast'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'
import MultiSelect from 'components/common/form/MultiSelect'

const DomainForm = ({ methods: { reset }, type }) => {
  const dispatch = useDispatch()
  const [createDomain] = useCreateDomainMutation()
  const [updateDomain] = useUpdateDomainMutation()
  const { data: dataSports, isLoading: isLoadingSports } = useGetSportsQuery()
  const { data: dataMovieGenres, isLoading: isLoadingMovieGenres } =
    useGetMovieGenresQuery()
  const { data: dataTvGenres, isLoading: isLoadingTvGenres } =
    useGetTvGenresQuery()
  const current = useSelector(state => state.current.current)

  const onSubmit = data => {
    const body = createFormData({ ...data, type })

    if (current) {
      const promise = updateDomain({ id: current.id, body }).unwrap()
      throwToast(promise, 'Updating domain!', 'Domain updated!')
      dispatch(clearCurrent())
    } else {
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
        sports: current.sports?.map(sport => sport.id),
        tv_genres: current.tv_genres?.map(genre => genre.id),
        movie_genres: current.movie_genres?.map(genre => genre.id)
      })
    } else {
      reset({
        name: '',
        url: '',
        sports: null,
        tv_genres: null,
        movie_genres: null
      })
    }
  }, [current])

  return (
    <Form id='domain' onSubmit={onSubmit}>
      <Input label='Domain Name' name='name' placeholder='Enter domain name' />
      <Input label='Domain URL' name='url' placeholder='Enter domain url' />
      <MultiSelect
        title='Sports'
        name='sports'
        options={dataSports?.sports}
        isLoading={isLoadingSports}
        placeholder='Select sports'
      />
      <MultiSelect
        title='TV Genres'
        name='tv_genres'
        options={dataTvGenres}
        isLoading={isLoadingTvGenres}
        placeholder='Select tv genres'
      />
      <MultiSelect
        title='Movie Genres'
        name='movie_genres'
        options={dataMovieGenres}
        isLoading={isLoadingMovieGenres}
        placeholder='Select movie genres'
      />
    </Form>
  )
}

const schema = yup.object({
  name: yup.string().required('Domain name is required!'),
  url: yup.string().url().required('Domain url is required!')
})

export default withFormProvider(DomainForm, schema)
