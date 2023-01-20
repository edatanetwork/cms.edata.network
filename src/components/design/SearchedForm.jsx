import { Form } from 'components/styled/common/Form.styled'
import * as F from 'components/styled/common/Field.styled'

const SearchedForm = () => {
  return (
    <Form>
      <F.Field>
        <F.Header>
          <F.Label>Searched</F.Label>
        </F.Header>
        <F.Body>
          <F.Input readOnly />
        </F.Body>
      </F.Field>
      <F.Field>
        <F.Header>
          <F.Label>Domain</F.Label>
        </F.Header>
        <F.Body>
          <F.Input readOnly />
        </F.Body>
      </F.Field>
    </Form>
  )
}

export default SearchedForm
