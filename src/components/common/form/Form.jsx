import { useFormContext } from 'react-hook-form'

import * as Styled from 'components/styled/common/Form.styled'

const Form = ({ children, id, onSubmit }) => {
  const { handleSubmit } = useFormContext()

  return (
    <Styled.Form id={id} onSubmit={handleSubmit(onSubmit)}>
      {children}
    </Styled.Form>
  )
}

export default Form
