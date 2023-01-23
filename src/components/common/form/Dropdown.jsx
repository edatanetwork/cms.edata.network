import { Controller, useFormContext } from 'react-hook-form'
import { checkFieldError } from 'utils/checkFieldError'

import * as F from 'components/styled/common/Field.styled'
import * as D from 'components/styled/common/Dropdown.styled'

const Dropdown = ({
  label,
  name,
  placeholder,
  options,
  isLoading = false,
  isSearchable = false
}) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  const getValueFromOptions = value =>
    options?.find(opt => opt.id === value)
      ? options.find(opt => opt.id === value)
      : null

  const error = checkFieldError(errors, name)

  return (
    <F.Field error={error}>
      <F.Header>
        <F.Label htmlFor={name}>{label}</F.Label>
        {error && <F.Error>{error.message}</F.Error>}
      </F.Header>
      <F.Body>
        <Controller
          name={name}
          control={control}
          render={({ field: { value, onChange } }) => (
            <D.Dropdown
              isLoading={isLoading}
              id={name}
              unstyled
              isClearable
              isSearchable={isSearchable}
              classNamePrefix='select'
              placeholder={placeholder}
              options={options}
              getOptionLabel={opt => opt.name}
              getOptionValue={opt => opt.id}
              value={getValueFromOptions(value)}
              onChange={opt => onChange(opt ? opt.id : undefined)}
            />
          )}
        />
      </F.Body>
    </F.Field>
  )
}

export default Dropdown
