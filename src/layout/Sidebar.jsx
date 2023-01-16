import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { clearCurrent } from 'features/currentSlice'

import Icon, { IconTypes } from 'components/common/Icon'
import { Grid } from 'components/styled/common/Grid.styled'
import { Button } from 'components/styled/common/Button.styled'
import * as Styled from 'components/styled/layout/Sidebar.styled'

const Sidebar = ({ title, form, children, btnTitle = 'SAVE' }) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const current = useSelector(state => state.current.current)

  useEffect(() => {
    if (current) {
      dispatch(clearCurrent())
    }
    // eslint-disable-next-line
  }, [location.pathname])

  return (
    <Styled.Sidebar>
      <Styled.Header>
        <Styled.Title>
          {current ? 'EDIT ' : 'CREATE '}
          {title}
        </Styled.Title>
        <Grid columns='auto auto'>
          <Button type='submit' form={form}>
            {btnTitle}
            <Icon type={IconTypes.circleCheck} />
          </Button>
        </Grid>
      </Styled.Header>
      <Styled.Body>{children}</Styled.Body>
    </Styled.Sidebar>
  )
}

export default Sidebar
