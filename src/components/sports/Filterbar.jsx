// import { useSearchParams } from 'react-router-dom'

import * as F from 'components/styled/layout/Filterbar.styled'

const Filterbar = () => {
  // const [searchParams, setSearchParams] = useSearchParams()

  // const handleChange = ({ key, value }) => {
  //   if (value === null) {
  //     searchParams.delete(key)
  //     const prev = Object.fromEntries(searchParams)
  //     setSearchParams(() => ({ ...prev }))
  //   } else {
  //     const prev = Object.fromEntries(searchParams)
  //     setSearchParams(() => ({ ...prev, [key]: value }))
  //   }
  // }

  return (
    <F.Filterbar columns='repeat(5, 1fr)'>
      <F.Dropdown
        unstyled
        isClearable
        classNamePrefix='select'
        placeholder='Sport'
      />
      <F.Dropdown
        unstyled
        isClearable
        classNamePrefix='select'
        placeholder='Country'
      />
      <F.Dropdown
        unstyled
        isClearable
        classNamePrefix='select'
        placeholder='League'
      />
      <F.Dropdown
        unstyled
        isClearable
        classNamePrefix='select'
        placeholder='Status'
      />
      <F.Dropdown
        unstyled
        isClearable
        classNamePrefix='select'
        placeholder='Author'
      />
    </F.Filterbar>
  )
}

export default Filterbar
