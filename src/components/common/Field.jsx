import * as Styled from 'components/styled/common/Field.styled'

const Field = ({ children, error, label, htmlFor }) => {
  return (
    <Styled.Field error={error}>
      <Styled.Header>
        <Styled.Label htmlFor={htmlFor}>{label}</Styled.Label>
        {error && <Styled.Error>{error.message}</Styled.Error>}
      </Styled.Header>
      <Styled.Body>{children}</Styled.Body>
    </Styled.Field>
  )
}

export default Field
