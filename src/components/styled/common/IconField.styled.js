import styled from 'styled-components'

export const Label = styled.label`
  font-size: 13px;
  display: block;
  color: ${({ theme }) => theme.clrBlack50};
  margin-bottom: 5px;
`

export const AddNewButton = styled.button`
  height: 45px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 24px;
  border: 1px solid #cfd6de;
  border-radius: 4px;
  background-color: transparent;
  color: #00a066;
  font-weight: 600;
  cursor: pointer;
  font-size: 13px;

  svg {
    width: 16px;
    height: auto;
  }
`

export const Preview = styled.ul`
  display: grid;
  gap: 5px;
  list-style: none;
  width: 100%;
  margin-bottom: 10px;
`

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border: 1px solid #cfd6de;
  border-radius: 4px;

  div {
    margin-left: auto;
    width: 60px;
    height: 100%;
    background-color: #ebeef1;
    display: grid;
    place-content: center;

    img {
      width: 28px;
      height: 28px;
    }
  }

  button {
    width: 0;
    overflow: hidden;
    border: 0;
    background-color: red;
    color: #fff;
    transition: width 150ms ease-in-out;
    height: 100%;
    margin-right: 10px;
    cursor: pointer;

    svg {
      width: 10px;
      height: auto;

      path {
        fill: #fff;
      }
    }
  }

  &:hover {
    button {
      width: 50px;
    }
  }
`
