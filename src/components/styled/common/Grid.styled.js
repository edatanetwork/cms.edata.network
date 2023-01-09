import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.columns ? props.columns : null)};
  grid-template-rows: ${props => (props.rows ? props.rows : null)};
  gap: ${props => (props.gap ? props.gap : null)};

  & > p {
    font-size: 13px;
    color: ${({ theme }) => theme.clrBlack50};
  }
`

export default Grid
