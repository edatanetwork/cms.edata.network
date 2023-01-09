import styled from 'styled-components'

export const Navbar = styled.div`
  width: 180px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 4px solid ${({ theme }) => theme.clrGray};

  a {
    font-size: 14px;
  }
`

export const Logo = styled.div`
  height: 4.5rem;
  display: flex;
  align-items: center;
  border-bottom: ${({ theme }) => theme.borderGray};
  padding-left: 1.5rem;

  svg {
    width: 70px;
  }
`

export const PrimaryNav = styled.ul`
  margin-bottom: auto;
`
export const PrimaryNavItem = styled.li`
  height: 4rem;
  display: flex;
  align-items: center;
  border-bottom: ${({ theme }) => theme.borderGray};
  padding-left: 1.5rem;

  a {
    text-transform: uppercase;
  }
`

export const SecondaryNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
`

export const SecondaryNavItem = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: color 150ms linear;

    svg {
      width: 20px;
    }

    &:hover {
      color: ${({ theme }) => theme.clrOrange};
    }
  }

  :last-of-type {
    a {
      padding-top: 1rem;
      border-top: ${({ theme }) => theme.borderGray};

      svg {
        color: ${({ theme }) => theme.clrError};
      }
    }
  }
`

// export const Categories = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   margin-bottom: auto;
//   padding: 1.5rem;
// `

// export const Item = styled.li`
//   --after-width: 6px;
//   --before-width: calc(2 * var(--after-width));
//   --after-x-pos: calc(-1 * calc(var(--after-width) + 10px));
//   --before-x-pos: calc(-1 * var(--after-width) / 2 + var(--after-x-pos));
//   --margin-left: calc(-1 * var(--before-x-pos));

//   position: relative;
//   text-transform: uppercase;
//   margin-left: var(--margin-left);

//   &::before,
//   &::after {
//     content: '';
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     aspect-ratio: 1;
//     border-radius: 50%;
//   }

//   &::before {
//     left: var(--before-x-pos);
//     width: var(--before-width);
//     background-color: ${props => props.color};
//     opacity: 20%;
//   }

//   &::after {
//     left: var(--after-x-pos);
//     width: var(--after-width);
//     background-color: ${props => props.color};
//   }
// `
