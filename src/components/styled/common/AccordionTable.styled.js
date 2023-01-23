import styled, { css } from 'styled-components'

export const Status = styled.span`
  width: 10px;
  height: 10px;
  background-color: #4db500;
  border-radius: 50%;
`

export const Cell = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 500;
    color: ${({ theme }) => theme.clrBlack50};
  }
`

export const Sort = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background-color: transparent;
  border: 0;
  transition: background-color 150ms ease-in-out;
  margin-left: -0.5rem;
  color: ${({ theme }) => theme.clrBlack50};
  cursor: pointer;

  &:hover {
    background-color: #ededed;
  }

  svg {
    width: 12px;
  }
`

export const Row = styled.div`
  height: 50px;
  display: grid;
  border-bottom: ${({ theme }) => theme.borderGray};

  ${props =>
    props.isActive &&
    css`
      box-shadow: -0px 10px 5px -10px rgba(0, 0, 0, 0.1);
    `}
`

export const AccordionRow = styled.div`
  height: 50px;
  display: grid;
  border-bottom: ${({ theme }) => theme.borderGray};
  font-size: 13px;
  padding-right: 2rem;

  ${Cell} {
    :first-of-type {
      height: 100%;
      display: grid;
      place-content: center;
      border-right: ${({ theme }) => theme.borderGray};
    }

    :nth-of-type(2) {
      padding-inline: 1rem;
    }

    :nth-last-of-type(2),
    :nth-last-of-type(3) {
      color: ${({ theme }) => theme.clrBlack50};
    }
  }
`

export const Body = styled.div`
  font-size: 13px;

  ${Row} {
    padding-right: 2rem;

    ${Cell} {
      :first-of-type {
        justify-content: center;
      }

      :nth-of-type(2) {
        padding-inline: 1rem;
        gap: 1rem;
      }

      :nth-last-of-type(2),
      :nth-last-of-type(3) {
        color: ${({ theme }) => theme.clrBlack30};
      }
    }
  }
`

export const Head = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.clrBlack50};

  ${Row} {
    padding-inline: 2rem;
  }
`

export const SportEventsTable = styled.div`
  ${Head} {
    ${Row} {
      grid-template-columns: 4fr 1fr 1fr 1fr 2fr 1.2fr 1.2fr 1.3fr;

      ${Cell} {
        :nth-of-type(2),
        :nth-of-type(3),
        :nth-of-type(4) {
          justify-content: center;
        }
      }
    }
  }

  ${Body} {
    ${Row} {
      grid-template-columns: 2rem 4fr 1fr 1fr 1fr 2fr 1.2fr 1.2fr 1.3fr;

      ${Cell} {
        :nth-of-type(2),
        :nth-of-type(4) {
          border-right: ${({ theme }) => theme.borderGray};
        }

        :nth-of-type(3),
        :nth-of-type(4),
        :nth-of-type(5) {
          justify-content: center;
        }

        :nth-of-type(2) {
          img {
            height: 22px;

            :last-of-type {
              margin-left: auto;
            }
          }
        }

        :nth-of-type(6) {
          gap: 0.5rem;

          img {
            height: 20px;
          }
        }
      }
    }

    ${AccordionRow} {
      grid-template-columns: 2rem 4fr 2fr 1fr 1.7fr 1.1fr 1.3fr 1.7fr;

      ${Cell} {
        :nth-of-type(2) {
          justify-content: space-between;
        }

        :nth-of-type(3),
        :nth-of-type(4) {
          justify-content: center;
        }
      }
    }
  }
`

const tvEventColumns = '3.5fr 2fr 1fr 1fr 1.5fr 1fr'

export const TvEventsTable = styled.div`
  ${Head} {
    ${Row} {
      grid-template-columns: ${tvEventColumns};

      ${Cell} {
        :nth-of-type(3) {
          justify-content: center;
        }
      }
    }
  }

  ${Body} {
    ${Row} {
      grid-template-columns: 2rem ${tvEventColumns};

      ${Cell} {
        :nth-of-type(4) {
          justify-content: center;
        }

        :nth-of-type(2) {
          img {
            height: 22px;
          }
        }
      }
    }

    ${AccordionRow} {
      grid-template-columns: 2rem ${tvEventColumns};

      ${Cell} {
        :nth-of-type(4) {
          justify-content: center;
        }

        :nth-of-type(3) {
          a {
            display: flex;
            gap: 0.5rem;
            margin-right: 4rem;
          }
        }
      }
    }
  }
`

export const MovieEventsTable = styled.div`
  ${Head} {
    ${Row} {
      grid-template-columns: 3.5fr 2fr 1.5fr 1fr 1fr 1.2fr 1fr;
    }
  }

  ${Body} {
    ${Row} {
      grid-template-columns: 2rem 3.5fr 2fr 1.5fr 1fr 1fr 1.2fr 1fr;

      ${Cell} {
        img {
          height: 36px;
        }
      }
    }

    ${AccordionRow} {
      grid-template-columns: 2rem 3.5fr 2fr 1.5fr 1fr 1fr 1.5fr 1fr;

      ${Cell} {
        :nth-of-type(3) {
          a {
            margin-right: 4rem;
          }
        }
      }
    }
  }
`
