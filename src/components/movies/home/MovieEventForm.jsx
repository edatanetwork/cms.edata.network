import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import * as C from 'constants/movie'

import withFormProvider from 'HOCs/withFormProvider'

import { throwToast } from 'utils/throwToast'
import { clearCurrent } from 'features/currentSlice'
import { createFormData } from 'utils/createFormData'
import { useGetMovieGenresQuery } from 'app/services/movie/genre'
import {
  useCreateFilmMutation,
  useUpdateFilmMutation
} from 'app/services/movie/films'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'
import MultiSelect from 'components/common/form/MultiSelect'
import CountrySelect from 'components/common/select/CountrySelect'
import Textarea from 'components/common/form/Textarea'
import InputWithImage from 'components/common/form/InputWithImage'
import AddMoviesEventLinks from 'components/common/form/AddMoviesEventLinks'
import Stepper from 'components/common/form/Stepper'
import { Grid } from 'components/styled/common/Grid.styled'

const MovieEventForm = ({ methods: { reset } }) => {
  const [activeStep, setActiveStep] = useState(1)
  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)
  const [createFilm] = useCreateFilmMutation()
  const [updateFilm] = useUpdateFilmMutation()
  const { data: dataMovieGenres, isLoading: isLoadingMovieGenres } =
    useGetMovieGenresQuery()

  const onSubmit = async data => {
    const body = createFormData(data)

    if (current) {
      const promise = updateFilm({ id: current.id, body }).unwrap()
      throwToast(promise, 'Updating movie!', 'Movie updated!')
      dispatch(clearCurrent())
    } else {
      const promise = createFilm(body).unwrap()
      throwToast(promise, 'Creating movie!', 'Movie created!')
      reset()
    }
  }

  useEffect(() => {
    if (current) {
      reset({
        [C.CHANNEL_NAME]: current.name,
        [C.CHANNEL_LOGO]: current.logo,
        [C.GENRE_ID]: current.genres?.map(genre => genre.id),
        [C.COUNTRY_ID]: current.country?.id,
        [C.RATING]: current.rating,
        [C.DURATION]: current.duration,
        [C.RELEASED]: current.released,
        [C.TRAILER]: current.trailer,
        [C.DESCRIPTION]: current.description,
        links: current.links
          ? current.links?.map(link => ({
              ...link,
              linkId: link.id,
              existing: true,
              language_id: link.language.id
            }))
          : []
      })
    } else {
      reset({
        [C.CHANNEL_NAME]: '',
        [C.CHANNEL_LOGO]: null,
        [C.GENRE_ID]: null,
        [C.COUNTRY_ID]: null,
        [C.RATING]: '',
        [C.DURATION]: '',
        [C.RELEASED]: '',
        [C.TRAILER]: '',
        [C.DESCRIPTION]: '',
        links: []
      })
    }
  }, [current])

  return (
    <>
      <Form id='movie-event' onSubmit={onSubmit}>
        <InputWithImage
          label='Movie Title'
          inputName={C.CHANNEL_NAME}
          dropzoneName={C.CHANNEL_LOGO}
          placeholder='Enter movie title'
        />
        {activeStep === 1 && (
          <>
            <MultiSelect
              title='Genre'
              placeholder='Select genres'
              name={C.GENRE_ID}
              isLoading={isLoadingMovieGenres}
              options={dataMovieGenres}
            />
            <CountrySelect name={C.COUNTRY_ID} />
            <Grid columns='1fr 1fr' gap='0.5rem'>
              <Input type='text' label='IMDB' name={C.RATING} />
              <Input type='number' label='Duration' name={C.DURATION} />
            </Grid>
            <Input type='date' label='Released' name={C.RELEASED} />
            <Input type='text' label='Trailer' name={C.TRAILER} />
            <Textarea label='Description' name={C.DESCRIPTION} />
          </>
        )}
        {activeStep === 2 && <AddMoviesEventLinks name='links' />}
      </Form>
      <Stepper activeStep={activeStep} setActiveStep={setActiveStep} />
    </>
  )
}

const schema = yup.object({
  [C.CHANNEL_NAME]: yup.string().required('Name is required!'),
  [C.GENRE_ID]: yup
    .array()
    .typeError('Genre is required!')
    .required('Genres is required!'),
  [C.COUNTRY_ID]: yup
    .number()
    .typeError('Country is required!')
    .required('Country is required!'),
  [C.RATING]: yup.string().required('Rating is required!'),
  [C.DURATION]: yup.number().typeError('is required!').required('is required!'),
  [C.RELEASED]: yup.string().required('Released is required!'),
  [C.TRAILER]: yup.string().url().required('Trailer is required!'),
  [C.DESCRIPTION]: yup.string().nullable(),
  links: yup.array().of(
    yup.object().shape({
      url: yup.string().url('Url is not valid').required('Link is required!'),
      quality: yup.string().required('Quality is required!'),
      language_id: yup.string().required('Language is required!')
    })
  )
})

export default withFormProvider(MovieEventForm, schema)
