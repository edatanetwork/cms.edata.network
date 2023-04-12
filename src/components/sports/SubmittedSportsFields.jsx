import { useParams, useSearchParams } from 'react-router-dom'

import { useGetSubmittedSportsQuery } from 'features/submitted/sportsSubmittedApiSlice'

import Field from 'components/common/Field'
import { Form } from 'components/styled/common/Form.styled'
import { ReadOnlyInput } from 'components/styled/common/Field.styled'
import { Textarea } from 'components/styled/common/Field.styled'

const SubmittedSportsFields = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  const item = useGetSubmittedSportsQuery(params, {
    selectFromResult: ({ data }) => {
      const sport = data?.submitted?.find(item => item.id.toString() === id)

      if (sport) {
        return sport
      }

      return {}
    }
  })
  let links = ''
  item?.links?.map(link => link.url).forEach(link => (links += `${link}, `))

  return (
    <Form>
      <Field label='Name'>
        <ReadOnlyInput readOnly>{item?.submit_name}</ReadOnlyInput>
      </Field>
      <Field label='Email'>
        <ReadOnlyInput readOnly>{item?.submit_email}</ReadOnlyInput>
      </Field>
      <Field label='Home Team'>
        <ReadOnlyInput readOnly>{item?.home_team?.name}</ReadOnlyInput>
      </Field>
      <Field label='Away Team'>
        <ReadOnlyInput readOnly>{item?.away_team?.name}</ReadOnlyInput>
      </Field>
      <Field label='Sport Type'>
        <ReadOnlyInput readOnly> {item?.sport?.name}</ReadOnlyInput>
      </Field>
      <Field label='Links'>
        <Textarea rows={5} readOnly value={links} />
      </Field>
    </Form>
  )
}

export default SubmittedSportsFields
