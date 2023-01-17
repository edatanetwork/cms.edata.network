import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import * as C from 'constants/sports'

import withFormProvider from 'HOCs/withFormProvider'
import { createFormData } from 'utils/createFormData'
import { useCreateTeamMutation, useUpdateTeamMutation } from 'app/sport/teams'
import { clearCurrent } from 'features/currentSlice'
import { throwToast } from 'utils/throwToast'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'
import SingleLogoField from 'components/common/form/SingleLogoField'
import CountrySelect from 'components/common/select/CountrySelect'
import SportSelect from 'components/common/select/SportSelect'

const TeamForm = ({ methods }) => {
  const { reset } = methods
  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)

  const [createTeam] = useCreateTeamMutation()
  const [updateteam] = useUpdateTeamMutation()

  const onSubmit = data => {
    const body = createFormData(data)

    if (current) {
      const promise = updateteam({ id: current.id, body }).unwrap()
      throwToast(promise, 'Updating team!', 'Team updated!')
      dispatch(clearCurrent())
    } else {
      const promise = createTeam(body).unwrap()
      throwToast(promise, 'Creating team!', 'Team created!')
      reset()
    }
  }

  useEffect(() => {
    if (current) {
      reset({
        [C.CATEGORY_TEAM_TITLE]: current.name,
        [C.CATEGORY_TEAM_ICON]: current.logo,
        [C.CATEGORY_TEAM_SPORT]: current.sport.id,
        [C.CATEGORY_TEAM_COUNTRY]: current.country.id
      })
    } else {
      reset({
        [C.CATEGORY_TEAM_TITLE]: '',
        [C.CATEGORY_TEAM_ICON]: null,
        [C.CATEGORY_TEAM_SPORT]: null,
        [C.CATEGORY_TEAM_COUNTRY]: null
      })
    }
  }, [current])

  return (
    <Form id='categories-team' onSubmit={onSubmit}>
      <Input type='text' label='Title' name={C.CATEGORY_TEAM_TITLE} />
      <SportSelect name={C.CATEGORY_TEAM_SPORT} />
      <CountrySelect name={C.CATEGORY_TEAM_COUNTRY} />
      <SingleLogoField label='Icon' name={C.CATEGORY_TEAM_ICON} />
    </Form>
  )
}

const schema = yup.object({
  [C.CATEGORY_TEAM_TITLE]: yup.string().required('Title is required!'),
  [C.CATEGORY_TEAM_SPORT]: yup
    .number()
    .typeError('Sport is required!')
    .required('Sport is required!'),
  [C.CATEGORY_TEAM_COUNTRY]: yup
    .number()
    .typeError('Country is required!')
    .required('Country is required!')
})

export default withFormProvider(TeamForm, schema)
