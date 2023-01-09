import * as F from 'components/styled/layout/Filterbar.styled'

const Filterbar = () => {
  return (
    <F.Filterbar columns='repeat(6, 1fr)'>
      <F.Dropdown
        unstyled
        isClearable
        classNamePrefix='select'
        placeholder='Sport'
      />
    </F.Filterbar>
  )
}

export default Filterbar
