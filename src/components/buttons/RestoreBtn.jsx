import Icon, { IconTypes } from 'components/common/Icon'
import { RoundButton } from 'components/styled/common/Button.styled'

const RestoreBtn = ({ restoreFn }) => (
  <RoundButton onClick={restoreFn}>
    <Icon type={IconTypes.edit} />
    Restore
  </RoundButton>
)

export default RestoreBtn
