import styled from 'styled-components'

const Login = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > svg {
    margin-bottom: 15px;
    width: 40px;
    height: auto;
  }

  p {
    margin-bottom: 40px;
    font-size: 14px;
  }
`

const Form = styled.form`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  button {
    display: grid;
    place-content: center;
    height: 45px;
    color: #fff;
    border-radius: 4px;
    background-color: #000;

    svg {
      width: 30px;
      height: auto;
    }
  }
`

Login.Form = Form

export default Login
