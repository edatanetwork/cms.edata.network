import { useFormContext } from 'react-hook-form'

import * as F from 'components/styled/common/Field.styled'

const Input = ({ label, name, type }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <F.Field error={errors[name]}>
      <F.Header>
        <F.Label htmlFor={name}>{label}</F.Label>
        {errors[name] && <F.Error>{errors[name].message}</F.Error>}
      </F.Header>
      <F.Body>
        <F.Input id={name} type={type} {...register(name)} />
      </F.Body>
    </F.Field>
  )
}

export default Input
