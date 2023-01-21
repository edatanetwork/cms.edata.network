import * as yup from 'yup'

import withFormProvider from 'HOCs/withFormProvider'
import { createFormData } from 'utils/createFormData'

import { useGetSportsQuery } from 'app/services/sport/sport'
import { useGetMovieGenresQuery } from 'app/services/movie/genre'
import { useGetTvGenresQuery } from 'app/services/tv/genre'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'
import MultiSelect from 'components/common/form/MultiSelect'

const DomainForm = ({ methods: { reset } }) => {
  const { data: dataSports, isLoading: isLoadingSports } = useGetSportsQuery()
  const { data: dataMovieGenres, isLoading: isLoadingMovieGenres } =
    useGetMovieGenresQuery()
  const { data: dataTvGenres, isLoading: isLoadingTvGenres } =
    useGetTvGenresQuery()

  const onSubmit = data => {
    const body = createFormData(data)
    console.log(Object.fromEntries(body))
    reset()
  }

  return (
    <Form id='domain' onSubmit={onSubmit}>
      <Input
        label='Domain Name'
        name='domain_name'
        placeholder='Enter domain name'
      />
      <Input
        label='Domain URL'
        name='domain_url'
        placeholder='Enter domain url'
      />
      <MultiSelect
        title='Sports'
        name='sports'
        options={dataSports?.sports}
        isLoading={isLoadingSports}
        placeholder='Select sports'
      />
      <MultiSelect
        title='TV Genres'
        name='tv'
        options={dataTvGenres}
        isLoading={isLoadingTvGenres}
        placeholder='Select tv genres'
      />
      <MultiSelect
        title='Movie Genres'
        name='movies'
        options={dataMovieGenres}
        isLoading={isLoadingMovieGenres}
        placeholder='Select movie genres'
      />
    </Form>
  )
}

const schema = yup.object({
  domain_name: yup.string().required('Domain name is required!'),
  domain_url: yup.string().required('Domain url is required!')
})

export default withFormProvider(DomainForm, schema)
