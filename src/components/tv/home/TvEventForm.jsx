import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import * as C from 'constants/tv'

import withFormProvider from 'HOCs/withFormProvider'

import { useGetTvGenresQuery } from 'app/services/tv/genre'
import { createFormData } from 'utils/createFormData'
import { throwToast } from 'utils/throwToast'
import { clearCurrent } from 'features/currentSlice'
import {
  useCreateChannelMutation,
  useUpdateChannelMutation
} from 'app/services/tv/channels'

import Form from 'components/common/form/Form'
import Dropdown from 'components/common/form/Dropdown'
import InputWithImage from 'components/common/form/InputWithImage'
import Stepper from 'components/common/form/Stepper'
import AddTvEventLinks from 'components/common/form/AddTvEventLinks'
import CountrySelect from 'components/common/select/CountrySelect'
import LanguageSelect from 'components/common/select/LanguageSelect'

const schema = yup.object({
  [C.CHANNEL_NAME]: yup.string().required('Channel name is required!'),
  [C.GENRE_ID]: yup.number().required('Genre is required!'),
  [C.COUNTRY_ID]: yup.number().required('Country is required!'),
  [C.LANGUAGE_ID]: yup.number().required('Language is required!'),
  links: yup.array().of(
    yup.object().shape({
      url: yup.string().required('Link is required!'),
      quality: yup.string().required('Quality is required!')
    })
  )
})

const TvEventForm1 = ({ methods: { reset } }) => {
  const [activeStep, setActiveStep] = useState(1)
  const dispatch = useDispatch()
  const { data, isLoading } = useGetTvGenresQuery()
  const [createChannel] = useCreateChannelMutation()
  const [updateChannel] = useUpdateChannelMutation()
  const current = useSelector(state => state.current.current)

  const onSubmit = async data => {
    const body = createFormData(data)

    if (current) {
      const promise = updateChannel({ id: current.id, body }).unwrap()
      throwToast(promise, 'Updating channel!', 'Channel updated!')
      dispatch(clearCurrent())
    } else {
      const promise = createChannel(body).unwrap()
      throwToast(promise, 'Creating channel!', 'Channel created!')
      reset()
    }
  }

  useEffect(() => {
    if (current) {
      reset({
        [C.CHANNEL_NAME]: current.name,
        [C.CHANNEL_LOGO]: current.logo,
        [C.GENRE_ID]: current.genre.id,
        [C.COUNTRY_ID]: current.country.id,
        [C.LANGUAGE_ID]: current.language.id,
        links: current.links
          ? current.links?.map(link => ({
              ...link,
              linkId: link.id,
              existing: true
            }))
          : []
      })
    } else {
      reset({
        [C.CHANNEL_NAME]: '',
        [C.CHANNEL_LOGO]: null,
        [C.GENRE_ID]: null,
        [C.COUNTRY_ID]: null,
        [C.LANGUAGE_ID]: null,
        links: []
      })
    }
  }, [current])

  return (
    <>
      <Form id='tv-event' onSubmit={onSubmit}>
        {activeStep === 1 && (
          <>
            <InputWithImage
              label='Channel Name'
              placeholder='Enter channel name'
              inputName={C.CHANNEL_NAME}
              dropzoneName={C.CHANNEL_LOGO}
            />
            <Dropdown
              isSearchable
              label='Genre'
              placeholder='Select genre'
              name={C.GENRE_ID}
              options={data}
              isLoading={isLoading}
            />
            <CountrySelect name={C.COUNTRY_ID} />
            <LanguageSelect name={C.LANGUAGE_ID} />
          </>
        )}
        {activeStep === 2 && <AddTvEventLinks name='links' />}
      </Form>
      <Stepper activeStep={activeStep} setActiveStep={setActiveStep} />
    </>
  )
}

export default withFormProvider(TvEventForm1, schema)
