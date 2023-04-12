import { useParams, useSearchParams } from 'react-router-dom'

import { useGetSubmittedMoviesQuery } from 'features/submitted/moviesSubmittedApiSlice'

import Field from 'components/common/Field'
import { Form } from 'components/styled/common/Form.styled'
import { ReadOnlyInput } from 'components/styled/common/Field.styled'
import { Textarea } from 'components/styled/common/Field.styled'

const SubmittedMovieFields = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  const item = useGetSubmittedMoviesQuery(params, {
    selectFromResult: ({ data }) => {
      const item = data?.movies?.find(item => item.id.toString() === id)
      console.log(data)
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
      <Field label='Title'>
        <ReadOnlyInput readOnly>{item?.name}</ReadOnlyInput>
      </Field>
      <Field label='IMDB Url'>
        <ReadOnlyInput readOnly>{item?.imdb_url}</ReadOnlyInput>
      </Field>
      <Field label='Links'>
        <Textarea rows={5} readOnly value={links} />
      </Field>
    </Form>
  )
}

export default SubmittedMovieFields
