import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Icon, { IconTypes } from 'components/common/Icon'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const StyledMenuButton = styled(MenuButton)`
  height: 4rem;
  display: flex;
  align-items: center;
  padding-inline: 20px;
  gap: 12px;
  background: ${({ theme }) => theme.clrGray30};
  font-size: 14px;
  border-bottom: ${({ theme }) => theme.borderGray};

  svg:last-of-type {
    width: 12px;
    margin-left: auto;
  }
`

const StyledMenuItems = styled(MenuItems)`
  width: 180px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  gap: 1rem;
  font-size: 14px;
  padding-block: 0.5rem;
  padding-inline: 1rem;

  &[data-focus] {
    background: ${({ theme }) => theme.clrGray30};
  }

  svg {
    width: 16px;
  }
`

const SectionDropdown = () => {
  return (
    <Menu>
      <StyledMenuButton>
        <Icon type={IconTypes.layers} /> Resources
        <Icon type={IconTypes.chevronDown} />
      </StyledMenuButton>
      <StyledMenuItems anchor='bottom'>
        <StyledMenuItem>
          <Link href='/resources'>
            <Icon type={IconTypes.layers} /> Resources
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href='/inspire'>
            <Icon type={IconTypes.image} />
            Inspire
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href='/jobs'>
            <Icon type={IconTypes.briefcase} />
            Jobs
          </Link>
        </StyledMenuItem>
      </StyledMenuItems>
    </Menu>
  )
}

export default SectionDropdown
