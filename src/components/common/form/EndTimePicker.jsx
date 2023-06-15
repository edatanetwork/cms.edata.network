import { Controller } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'

import * as F from 'components/styled/common/Field.styled'
import * as E from 'components/styled/common/EndTimePicker.styled'

const EndTimePicker = ({ name }) => {
  const {
    control,
    register,
    formState: { errors }
  } = useFormContext()

  const minutes = [...Array.from({ length: 14 }, (_, i) => i * 10 + 10)]

  return (
    <F.Field error={errors[name]}>
      <F.Header>
        <F.Label htmlFor={name}>End Time (min)</F.Label>
        {errors[name] && <F.Error>{errors[name].message}</F.Error>}
      </F.Header>
      <E.EndTimePicker>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) =>
            minutes.map(min => (
              <input
                type='radio'
                key={min}
                name={name}
                value={min}
                data-text={`+${min}`}
                checked={value == min}
                onChange={e => onChange(e.target.value)}
              />
            ))
          }
        />
        <input type='number' placeholder='Other' {...register(name)} />
      </E.EndTimePicker>
    </F.Field>
  )
}

export default EndTimePicker
