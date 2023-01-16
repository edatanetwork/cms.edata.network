import { useFormContext } from 'react-hook-form'

import * as F from 'components/styled/common/Field.styled'
import * as E from 'components/styled/common/EndTimePicker.styled'

const EndTimePicker = ({ name }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const minutes = [...Array.from({ length: 16 }, (_, i) => i * 10)]

  return (
    <F.Field error={errors[name]}>
      <F.Header>
        <F.Label htmlFor={name}>End Time (min)</F.Label>
        {errors[name] && <F.Error>{errors[name].message}</F.Error>}
      </F.Header>
      <E.EndTimePicker>
        {minutes.map(min => (
          <input
            type='radio'
            key={min}
            name={name}
            value={min}
            data-text={`+${min}`}
            {...register(name)}
          />
        ))}
      </E.EndTimePicker>
    </F.Field>
  )
}

export default EndTimePicker
