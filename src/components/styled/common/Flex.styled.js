import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : null)};
  justify-content: ${props => (props.justify ? props.justify : null)};
  align-items: ${props => (props.align ? props.align : null)};
`
