import { removeConfirmation } from 'utils/throwToast'

import Icon, { IconTypes } from 'components/common/Icon'
import * as B from 'components/styled/common/Button.styled'

const DeleteBtn = ({ deleteFn }) => {
  const deletePermanently = () => {
    removeConfirmation(() => deleteFn())
  }

  return (
    <B.CircleButton onClick={deletePermanently}>
      <Icon type={IconTypes.delete} />
    </B.CircleButton>
  )
}

export default DeleteBtn
