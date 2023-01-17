import { useState } from 'react'
import * as yup from 'yup'
import * as C from 'constants/movie'

import withFormProvider from 'HOCs/withFormProvider'
import { createFormData } from 'utils/createFormData'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'
import Dropdown from 'components/common/form/Dropdown'
import Textarea from 'components/common/form/Textarea'
import InputWithImage from 'components/common/form/InputWithImage'
import AddMoviesEventLinks from 'components/common/form/AddMoviesEventLinks'
import Stepper from 'components/common/form/Stepper'
import { Grid } from 'components/styled/common/Grid.styled'

const MovieEventForm = () => {
  const [activeStep, setActiveStep] = useState(1)

  const onSubmit = data => {
    const body = createFormData(data)
    console.log(Object.fromEntries(body))
  }

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
            <Dropdown
              label='Genre'
              name={C.GENRE_ID}
              placeholder='Select genre'
              options={leagues}
            />
            <Dropdown
              label='Country'
              name={C.COUNTRY_ID}
              placeholder='Select country'
              options={countries}
            />
            <Grid columns='1fr 1fr' gap='0.5rem'>
              <Input type='text' label='IMDB' name={C.RATING} />
              <Input type='number' label='Duration' name={C.DURATION} />
            </Grid>
            <Input type='text' label='Released' name={C.RELEASED} />
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
  [C.CHANNEL_NAME]: yup.string().required(),
  [C.GENRE_ID]: yup.number().required(),
  [C.COUNTRY_ID]: yup.number().required(),
  [C.RATING]: yup.string().required(),
  [C.DURATION]: yup.number().required(),
  [C.RELEASED]: yup.string().required(),
  [C.TRAILER]: yup.string().url().required(),
  [C.DESCRIPTION]: yup.string().required()
})

export default withFormProvider(MovieEventForm, schema)

const countries = [
  {
    id: 1,
    name: 'Albania'
  },
  {
    id: 2,
    name: 'England'
  },
  {
    id: 3,
    name: 'Germany'
  }
]

const leagues = [
  {
    id: 1,
    sport_id: 1,
    country_id: 1,
    name: 'Superliga'
  },
  {
    id: 1,
    sport_id: 1,
    country_id: 1,
    name: 'First Division'
  },
  {
    id: 1,
    sport_id: 2,
    country_id: 2,
    name: 'Super Cup'
  }
]
