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

const TeamForm = ({ methods }) => {
  const { reset } = methods
  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)

  const [createTeam] = useCreateTeamMutation()
  const [updateteam] = useUpdateTeamMutation()

  const onSubmit = data => {
    const body = createFormData(data)

    if (current) {
      const promise = updateteam({ id: current.it, body }).unwrap()
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
        [C.CATEGORY_TEAM_ICON]: current.logo
      })
    } else {
      reset({
        [C.CATEGORY_TEAM_TITLE]: '',
        [C.CATEGORY_TEAM_ICON]: null
      })
    }
  }, [current])

  return (
    <Form id='categories-team' onSubmit={onSubmit}>
      <Input type='text' label='Title' name={C.CATEGORY_TEAM_TITLE} />
      <SingleLogoField label='Icon' name={C.CATEGORY_TEAM_ICON} />
    </Form>
  )
}

const schema = yup.object({
  [C.CATEGORY_TEAM_TITLE]: yup.string().required('Title is required!')
})

export default withFormProvider(TeamForm, schema)
