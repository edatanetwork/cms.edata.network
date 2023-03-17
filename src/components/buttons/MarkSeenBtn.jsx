import Icon, { IconTypes } from 'components/common/Icon'
import * as B from 'components/styled/common/Button.styled'

const MarkSeenBtn = ({ markSeenFn }) => {
  return (
    <B.CircleButton onClick={markSeenFn}>
      <Icon type={IconTypes.eye} />
    </B.CircleButton>
  )
}

export default MarkSeenBtn
