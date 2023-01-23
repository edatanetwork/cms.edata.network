import { useFormContext } from 'react-hook-form'
import { checkFieldError } from 'utils/checkFieldError'

import * as F from 'components/styled/common/Field.styled'

const Input = ({ label, name, type, placeholder }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const error = checkFieldError(errors, name)

  return (
    <F.Field error={error}>
      <F.Header>
        <F.Label htmlFor={name}>{label}</F.Label>
        {error && <F.Error>{error.message}</F.Error>}
      </F.Header>
      <F.Body>
        <F.Input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name)}
        />
      </F.Body>
    </F.Field>
  )
}

export default Input
