import { useFormContext, Controller } from 'react-hook-form'

import { LazyLoadImage } from 'react-lazy-load-image-component'

import Icon, { IconTypes } from 'components/common/Icon'
import * as F from 'components/styled/common/Field.styled'
import * as D from 'components/styled/common/DropdownPreview.styled'

const DropdownPreview = ({ label, name, placeholder, options }) => {
  const {
    watch,
    control,
    formState: { errors }
  } = useFormContext()

  const selected = watch(name)
  const logo = options.find(opt => opt.id === selected)?.logo

  const getValueFromOptions = value =>
    options?.find(opt => opt.id === value)
      ? options.find(opt => opt.id === value)
      : null

  return (
    <F.Field error={errors[name]}>
      <F.Header>
        <F.Label>{label}</F.Label>
        {errors[name] && <F.Error>{errors[name].message}</F.Error>}
      </F.Header>
      <F.Body>
        <D.DrodownPreview>
          <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange } }) => (
              <D.Dropdown
                unstyled
                isClearable
                classNamePrefix='select'
                placeholder={placeholder}
                options={options}
                getOptionValue={opt => opt.id}
                value={getValueFromOptions(value)}
                onChange={opt => onChange(opt ? opt.id : undefined)}
                formatOptionLabel={option => (
                  <>
                    <div>
                      <LazyLoadImage
                        effect='opacity'
                        src={option.logo}
                        alt=''
                      />
                    </div>
                    {option.name}
                  </>
                )}
              />
            )}
          />
          <D.Preview>
            {logo ? (
              <LazyLoadImage effect='opacity' src={logo} alt='team logo' />
            ) : (
              <Icon type={IconTypes.bigPlus} />
            )}
          </D.Preview>
        </D.DrodownPreview>
      </F.Body>
    </F.Field>
  )
}

export default DropdownPreview
