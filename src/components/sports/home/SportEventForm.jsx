import { useState } from 'react'
import * as yup from 'yup'
import * as C from 'constants/sports'

import { useFieldArray } from 'react-hook-form'

import withFormProvider from 'HOCs/withFormProvider'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'
import Dropdown from 'components/common/form/Dropdown'
import EndTimePicker from 'components/common/form/EndTimePicker'
import DropdownPreview from 'components/common/form/DropdownPreview'
import Stepper from 'components/common/form/Stepper'
import AddSportEventLinks from 'components/common/form/AddSportEventLinks'

import Grid from 'components/styled/common/Grid.styled'

const SportEventForm = ({ methods }) => {
  const [activeStep, setActiveStep] = useState(1)

  const { reset } = methods

  const onSubmit = data => {
    console.log(data)
    // reset()
  }

  return (
    <>
      <Form id='sport-event' onSubmit={onSubmit}>
        <Grid columns='1fr 1fr' gap='0.5rem'>
          <DropdownPreview
            label='Team 1'
            placeholder='Search team'
            name={C.TEAM_1}
            options={options}
          />
          <DropdownPreview
            label='Team 2'
            placeholder='Search team'
            name={C.TEAM_2}
            options={options}
          />
        </Grid>
        {activeStep === 1 && <Step1 />}
        {activeStep === 2 && <Step2 />}
      </Form>
      <Stepper activeStep={activeStep} setActiveStep={setActiveStep} />
    </>
  )
}

const Step1 = () => (
  <>
    <Dropdown
      label='Sport'
      placeholder='Select sport'
      name={C.SPORT_ID}
      options={sports}
    />
    <Dropdown
      label='Country'
      placeholder='Select sport'
      name={C.COUNTRY_ID}
      options={countries}
    />
    <Dropdown
      label='League'
      placeholder='Select sport'
      name={C.LEAGUE_ID}
      options={leagues}
    />
    <Grid columns='1fr 1fr' gap='0.5rem'>
      <Input type='date' label='Start date' name={C.START_DATE} />
      <Input type='time' label='Start time' name={C.START_TIME} />
    </Grid>
    <EndTimePicker name={C.END_TIME} />
  </>
)

const Step2 = () => (
  <>
    <AddSportEventLinks name='links' />{' '}
  </>
)

const schema = yup.object({
  // [C.TEAM_1]: yup.number().required('Team 1 is required!'),
  // [C.TEAM_2]: yup
  //   .number()
  //   .required('Team 2 is required!')
  //   .notOneOf([yup.ref(C.TEAM_1)], 'Same teams!'),
  // [C.SPORT_ID]: yup.number().required('Sport is required!'),
  // [C.COUNTRY_ID]: yup.number().required('Country is required!'),
  // [C.LEAGUE_ID]: yup.number().required('League is required!'),
  // [C.START_DATE]: yup.string().required('Date is required!'),
  // [C.START_TIME]: yup.string().required('Time is required!'),
  // [C.END_TIME]: yup
  //   .number()
  //   .required('Please select extra minutes!')
  //   .typeError('Please select extra minutes!')
})

export default withFormProvider(SportEventForm, schema)

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

export const options = [
  {
    id: 1,
    name: 'Inter',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/180px-FC_Internazionale_Milano_2021.svg.png'
  },
  {
    id: 2,
    name: 'Milan',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/130px-Logo_of_AC_Milan.svg.png'
  },
  {
    id: 3,
    name: 'Juventus',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg'
  },
  {
    id: 4,
    name: 'Napoli',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/SSC_Neapel.svg/170px-SSC_Neapel.svg.png'
  },
  {
    id: 5,
    name: 'Roma',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/AS_Roma_logo_%282017%29.svg/155px-AS_Roma_logo_%282017%29.svg.png'
  },
  {
    id: 6,
    name: 'Fiorentina',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/2022_ACF_Fiorentina_logo.svg/180px-2022_ACF_Fiorentina_logo.svg.png'
  }
]
