import styled from 'styled-components'

import { Button } from 'components/styled/common/Button.styled'

const Stepper = ({ setActiveStep, activeStep }) => {
  return (
    <Container>
      <Button type='button' onClick={() => setActiveStep(1)}>
        Prev Step
      </Button>
      <p>{activeStep} / 2</p>
      <Button type='button' onClick={() => setActiveStep(2)}>
        Next Step
      </Button>
    </Container>
  )
}

export default Stepper

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  button {
    :first-of-type {
      margin-left: -0.5rem;
    }

    :last-of-type {
      margin-right: -0.5rem;
    }
  }
`
