import { useState } from 'react'

import Icon, { IconTypes } from 'components/common/Icon'
import {
  Container,
  Header,
  Options
} from 'components/styled/common/Select.styled'

const Select = ({ children, title, count }) => {
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <Header onClick={() => setOpen(!open)}>
        {title}
        {open ? (
          <Icon type={IconTypes.chevronUp} />
        ) : (
          <Icon type={IconTypes.chevronDown} />
        )}
      </Header>
      <Options toggle={open} count={count}>
        {children}
      </Options>
    </Container>
  )
}

export default Select
