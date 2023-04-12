import { useParams, useSearchParams } from 'react-router-dom'

import { useGetSubmittedChannelsQuery } from 'features/submitted/channelsSubmittedApiSlice'

import Field from 'components/common/Field'
import { Form } from 'components/styled/common/Form.styled'
import { ReadOnlyInput } from 'components/styled/common/Field.styled'
import { Textarea } from 'components/styled/common/Field.styled'

const SubmittedChannelFields = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  const item = useGetSubmittedChannelsQuery(params, {
    selectFromResult: ({ data }) => {
      const item = data?.channels?.find(item => item.id.toString() === id)

      if (item) {
        return item
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
      <Field label='Channel Name'>
        <ReadOnlyInput readOnly>{item?.name}</ReadOnlyInput>
      </Field>
      <Field label='Channel Country'>
        <ReadOnlyInput readOnly>{item?.country?.name}</ReadOnlyInput>
      </Field>
      <Field label='Links'>
        <Textarea rows={5} readOnly value={links} />
      </Field>
    </Form>
  )
}

export default SubmittedChannelFields
