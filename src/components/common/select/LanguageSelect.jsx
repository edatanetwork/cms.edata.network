import Dropdown from 'components/common/form/Dropdown'

import { useGetLanguagesQuery } from 'app/common/languages'

const LanguageSelect = ({ name }) => {
  const { data, isLoading } = useGetLanguagesQuery()

  return (
    <Dropdown
      label='Langauge'
      placeholder='Select language'
      name={name}
      isSearchable
      isLoading={isLoading}
      options={data?.languages}
    />
  )
}

export default LanguageSelect
