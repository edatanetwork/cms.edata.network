import { useState } from 'react'
import * as yup from 'yup'
import * as C from 'constants/tv'

import withFormProvider from 'HOCs/withFormProvider'

import Form from 'components/common/form/Form'
import Dropdown from 'components/common/form/Dropdown'
import InputWithImage from 'components/common/form/InputWithImage'
import Stepper from 'components/common/form/Stepper'
import Links from 'components/common/form/Links'

const TvEventForm1 = ({ methods }) => {
  const [activeStep, setActiveStep] = useState(1)
  const { reset } = methods

  const onSubmit = data => {
    // reset()
  }

  return (
    <>
      <Stepper activeStep={activeStep} setActiveStep={setActiveStep} />
      <Form id='tv-event' onSubmit={onSubmit}>
        <InputWithImage
          label='Channel Name'
          placeholder='Enter channel name'
          inputName={C.CHANNEL_NAME}
          dropzoneName={C.CHANNEL_LOGO}
        />
        {activeStep === 1 && <Step1 />}
        {activeStep === 2 && <Step2 />}
      </Form>
    </>
  )
}

const Step1 = () => (
  <>
    <Dropdown
      label='Category'
      placeholder='Select category'
      name={C.CATEGORY_ID}
      options={sports}
    />
    <Dropdown
      label='Country'
      placeholder='Select country'
      name={C.COUNTRY_ID}
      options={countries}
    />
    <Dropdown
      label='Language'
      placeholder='Select language'
      name={C.LANGUAGE_ID}
      options={leagues}
    />
  </>
)

const Step2 = () => (
  <>
    <Links />
  </>
)

const schema = yup.object({
  [C.CHANNEL_NAME]: yup.string().required('Channel name is required!'),
  [C.CATEGORY_ID]: yup.number().required('Category is required!'),
  [C.COUNTRY_ID]: yup.number().required('Country is required!'),
  [C.LANGUAGE_ID]: yup.number().required('Language is required!')
})

export default withFormProvider(TvEventForm1, schema)

const sports = [
  {
    id: 1,
    name: 'Football'
  },
  {
    id: 2,
    name: 'Basketball'
  },
  {
    id: 3,
    name: 'Voleyball'
  },
  {
    id: 4,
    name: 'Tennis'
  }
]

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
