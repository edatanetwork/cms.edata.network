import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import * as C from 'constants/sports'

import withFormProvider from 'HOCs/withFormProvider'
import { createFormData } from 'utils/createFormData'
import {
  useCreateLeagueMutation,
  useUpdateLeagueMutation
} from 'app/sport/leagues'
import { clearCurrent } from 'features/currentSlice'
import { throwToast } from 'utils/throwToast'

import Form from 'components/common/form/Form'
import Input from 'components/common/form/Input'
import SingleLogoField from 'components/common/form/SingleLogoField'

const LeagueForm = ({ methods }) => {
  const { reset } = methods
  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)
  const sport_id = useSelector(state => state.filter.sportId)
  const country_id = useSelector(state => state.filter.countryId)
  const [createLeague] = useCreateLeagueMutation()
  const [updateLeague] = useUpdateLeagueMutation()

  const onSubmit = data => {
    const body = createFormData({ ...data, sport_id, country_id })
    if (current) {
      const promise = updateLeague({ id: current.id, body }).unwrap()
      throwToast(promise, 'Updating league!', 'League updated!')
      dispatch(clearCurrent())
    } else {
      const promise = createLeague(body).unwrap()
      throwToast(promise, 'Creating league!', 'League created!')
      reset()
    }
  }

  useEffect(() => {
    if (current) {
      reset({
        [C.CATEGORY_LEAGUE_TITLE]: current.name,
        [C.CATEGORY_LEAGUE_ICON]: current.logo
      })
    } else {
      reset({
        [C.CATEGORY_LEAGUE_TITLE]: '',
        [C.CATEGORY_LEAGUE_ICON]: null
      })
    }
  }, [current])

  return (
    <Form id='categories-league' onSubmit={onSubmit}>
      <Input
        type='text'
        label='Title'
        placeholder='Enter title'
        name={C.CATEGORY_LEAGUE_TITLE}
      />
      <SingleLogoField label='Logo' name={C.CATEGORY_LEAGUE_ICON} />
    </Form>
  )
}

const schema = yup.object({
  [C.CATEGORY_LEAGUE_TITLE]: yup.string().required('Name is required!')
})

export default withFormProvider(LeagueForm, schema)
