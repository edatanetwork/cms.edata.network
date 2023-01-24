import { useState, useEffect } from 'react'
import * as yup from 'yup'
import * as C from 'constants/sports'
import { useDispatch, useSelector } from 'react-redux'

import {
  useCreateMatchMutation,
  useUpdateMatchMutation
} from 'app/services/sport/matches'
import { throwToast } from 'utils/throwToast'
import { clearCurrent } from 'features/currentSlice'

import withFormProvider from 'HOCs/withFormProvider'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'
import EndTimePicker from 'components/common/form/EndTimePicker'
import DropdownPreview from 'components/common/form/DropdownPreview'
import Stepper from 'components/common/form/Stepper'
import AddSportEventLinks from 'components/common/form/AddSportEventLinks'
import SportSelect from 'components/common/select/SportSelect'
import CountrySelect from 'components/common/select/CountrySelect'
import LeagueSelect from 'components/common/select/LeagueSelect'

import Grid from 'components/styled/common/Grid.styled'

const SportEventForm = ({ methods: { reset } }) => {
  const dispatch = useDispatch()
  const [activeStep, setActiveStep] = useState(1)
  const [createMatch] = useCreateMatchMutation()
  const [udpateMatch] = useUpdateMatchMutation()
  const current = useSelector(state => state.current.current)

  const onSubmit = data => {
    const body = {
      ...data,
      home_team: data.home_team.id,
      away_team: data.away_team.id
    }

    if (current) {
      const promise = udpateMatch({ id: current.id, body }).unwrap()
      throwToast(promise, 'Updating match!', 'Match updated!')
      dispatch(clearCurrent())
    } else {
      const promise = createMatch(body).unwrap()
      throwToast(promise, 'Creating match!', 'Match created!')
      reset()
    }
  }

  useEffect(() => {
    if (current) {
      reset({
        [C.TEAM_1]: current.home_team,
        [C.TEAM_2]: current.away_team,
        [C.SPORT_ID]: current.sport.id,
        [C.COUNTRY_ID]: current.country.id,
        [C.LEAGUE_ID]: current.league.id,
        [C.START_DATE]: current.start_time.split(' ')[0],
        [C.START_TIME]: current.start_time.split(' ')[1].slice(0, -3)
      })
    } else {
      reset({
        [C.TEAM_1]: null,
        [C.TEAM_2]: null,
        [C.SPORT_ID]: null,
        [C.COUNTRY_ID]: null,
        [C.LEAGUE_ID]: null,
        [C.START_DATE]: '',
        [C.START_TIME]: ''
      })
    }
  }, [current])

  return (
    <>
      <Form id='sport-event' onSubmit={onSubmit}>
        <Grid columns='1fr 1fr' gap='0.5rem'>
          <DropdownPreview
            label='Home Team'
            placeholder='Search team'
            name={C.TEAM_1}
          />
          <DropdownPreview
            label='Away Team'
            placeholder='Search team'
            name={C.TEAM_2}
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
    <SportSelect name={C.SPORT_ID} />
    <CountrySelect name={C.COUNTRY_ID} />
    <LeagueSelect name={C.LEAGUE_ID} />
    <Grid columns='1fr 1fr' gap='0.5rem'>
      <Input type='date' label='Start date' name={C.START_DATE} />
      <Input type='time' label='Start time' name={C.START_TIME} />
    </Grid>
    <EndTimePicker name={C.END_TIME} />
  </>
)

const Step2 = () => (
  <>
    <AddSportEventLinks name='links' />
  </>
)

const schema = yup.object({
  [C.TEAM_1]: yup
    .object()
    .typeError('Select a team!')
    .required('Select a team!'),
  [C.TEAM_2]: yup
    .object()
    .typeError('Select a team!')
    .required('Select a team!')
    .notOneOf([yup.ref(C.TEAM_1)], 'Same teams!'),
  [C.SPORT_ID]: yup.number().required('Sport is required!'),
  [C.COUNTRY_ID]: yup.number().required('Country is required!'),
  [C.LEAGUE_ID]: yup.number().required('League is required!'),
  [C.START_DATE]: yup.string().required('Date is required!'),
  [C.START_TIME]: yup.string().required('Time is required!'),
  [C.END_TIME]: yup
    .number()
    .required('Please select extra minutes!')
    .typeError('Please select extra minutes!')
})

export default withFormProvider(SportEventForm, schema)
