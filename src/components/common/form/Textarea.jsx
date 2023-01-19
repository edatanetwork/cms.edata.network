import { useFormContext } from 'react-hook-form'

import * as F from 'components/styled/common/Field.styled'

const Textarea = ({ label, name, rows = 3, placeholder }) => {
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
        <F.Textarea
          rows={rows}
          id={name}
          {...register(name)}
          placeholder={placeholder}
        />
      </F.Body>
    </F.Field>
  )
}

export default Textarea
