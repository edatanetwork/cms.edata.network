import Icon, { IconTypes } from 'components/common/Icon'
import { CircleButton } from 'components/styled/common/Button.styled'

const FavEditDel = ({ favourite, edit, remove }) => {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', marginLeft: 'auto' }}>
      <CircleButton onClick={favourite}>
        <Icon type={IconTypes.heart} />
      </CircleButton>
      <CircleButton onClick={edit}>
        <Icon type={IconTypes.edit} />
      </CircleButton>
      <CircleButton onClick={remove}>
        <Icon type={IconTypes.delete} />
      </CircleButton>
    </div>
  )
}

export default FavEditDel
