import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid #ebeef1;
  border-radius: 5px;
  font-size: 13px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 1.5rem;
  text-transform: uppercase;

  svg {
    width: 12px;
    height: auto;
  }
`

export const Options = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  background-color: #ecf1f7;
  gap: 1rem;
  height: ${props =>
    props.toggle
      ? `calc(${props.count} * 50px + calc(${props.count + 1} *  1rem))`
      : '0'};
  overflow: hidden;
  transition: all 150ms linear;
`

export const Option = styled.label`
  background-color: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 90%;
  padding-right: 1rem;
  position: relative;
  border-radius: 5px;

  &::after {
    content: '';
    position: absolute;
    background-color: #ecf1f7;
    right: calc(1rem + 20px + 1rem);
    top: 0;
    width: 2px;
    height: 100%;
  }

  p {
    padding: 0 2rem 0 1rem;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
  }

  input {
    width: 20px;
    height: 20px;
    position: relative;
    appearance: none;

    &:checked::before {
      content: '';
      position: absolute;
      top: 0;
      width: 20px;
      height: 20px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='70.418' viewBox='0 0 100 70.418' %3E%3Cpath id='_041-checked' data-name='041-checked' d='M34.818,149.737-.707,115.514l8.622-8.306,26.9,25.917L90.671,79.319l8.622,8.306Z' transform='translate(0.707 -79.319)' fill='%2300a066' /%3E%3C/svg%3E");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`
