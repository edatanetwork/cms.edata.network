import { useNavigate } from 'react-router-dom'

import Icon, { IconTypes } from 'components/common/Icon'
import * as B from 'components/styled/common/Button.styled'

const EditBtn = ({ path }) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(path)
  }

  return (
    <B.CircleButton onClick={handleNavigate}>
      <Icon type={IconTypes.edit} />
    </B.CircleButton>
  )
}

export default EditBtn
