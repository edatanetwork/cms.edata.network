import { Controller } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'

import * as F from 'components/styled/common/Field.styled'
import * as D from 'components/styled/common/Dropdown.styled'

export default ({ title, name, options, isLoading, placeholder }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const getValueFromOptions = value => {
    let values = []
    if (Array.isArray(value)) {
      for (const el of value) {
        values.push(options.find(opt => opt.id === el))
      }
    }
    return values
  }

  return (
    <F.Field error={errors[name]}>
      <F.Header>
        <F.Label>{title}</F.Label>
        {errors[name] && <F.Error>{errors[name].message}</F.Error>}
      </F.Header>
      <F.Body>
        <Controller
          name={name}
          control={control}
          render={({ field: { value, onChange } }) => (
            <D.Dropdown
              isMulti
              unstyled
              isLoading={isLoading}
              isClearable={false}
              classNamePrefix='select'
              options={options}
              getOptionLabel={opt => opt.name}
              getOptionValue={opt => opt.id}
              placeholder={placeholder}
              value={getValueFromOptions(value)}
              onChange={selected => onChange(selected.map(opt => opt.id))}
            />
          )}
        />
      </F.Body>
    </F.Field>
  )
}
