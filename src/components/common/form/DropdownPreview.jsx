import { useFormContext, Controller } from 'react-hook-form'
import debounce from 'lodash.debounce'

import Image from '../Image'

import { useLazyGetTeamsQuery } from 'app/services/sport/teams'
import { useGetCountriesQuery } from 'app/services/common/countries'

import Icon, { IconTypes } from 'components/common/Icon'
import * as F from 'components/styled/common/Field.styled'
import * as D from 'components/styled/common/DropdownPreview.styled'

const DropdownPreview = ({ label, name, placeholder }) => {
  const {
    watch,
    control,
    formState: { errors }
  } = useFormContext()

  const [trigger] = useLazyGetTeamsQuery()
  const { data } = useGetCountriesQuery()

  const handleSearch = async (search, callback) => {
    if (search !== '') {
      const res = await trigger({ search }).unwrap()
      callback(res.teams)
    }
  }

  // const country = data?.countries?.find(
  //   item => item.id === watch(name)?.country.id
  // )

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
                loadOptions={debounce(handleSearch, 500)}
                getOptionValue={opt => opt.id}
                value={value}
                onChange={opt => onChange(opt ? opt : null)}
                formatOptionLabel={option => (
                  <>
                    <div>
                      <Image effect='opacity' src={option.logo} alt='' />
                    </div>
                    {option.name}
                  </>
                )}
              />
            )}
          />
          <D.Preview>
            {watch(name)?.logo ? (
              <>
                {/* {country?.flags?.length && (
                  <D.Country>
                    <Image
                      effect='opacity'
                      src={country?.flags[0].preview}
                      alt='country flag'
                    />
                  </D.Country>
                )} */}
                <D.Logo>
                  <Image
                    effect='opacity'
                    src={watch(name).logo}
                    alt='team logo'
                  />
                </D.Logo>
              </>
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
