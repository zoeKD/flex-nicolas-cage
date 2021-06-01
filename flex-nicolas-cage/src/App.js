import { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";

import stepText from './stepTexts'
import FlexBox from './FlexBox'

const AppContainer = styled.div`
  text-align: center;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
`

const StoryContainer = styled.div`
  background-color: #d26b82;
  flex-grow: 1;
  padding-top: 1rem;
`

const NavigationContainer = styled.div`
  margin-top: 3rem;
  & > :not(:last-child) {
    margin-right: 1rem;
  }
`
const StyledIcon = styled(FontAwesomeIcon)`
  color: #d26b82;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};

  &:hover {
    color: #f74daa;
  }
`

const Button = styled.button`
  background: ${({ active }) => active ? '#d26b82' : 'none'};
  border-style: none;
  font-size: 1rem;
  border: 1px solid #d26b82;
  border-radius: 50%;
  width: 2.3rem;
  height: 2.3rem;
  color: ${({ active }) => active ? 'white' : '#d26b82'};
  ${({ disabled }) => disabled && 'pointer-events: none'};

  &:hover {
    color: #f74daa;
    border-color: #f74daa;
  }
`

const App = () => {
  const [step, setStep] = useState(1)
  const stepNumbers = [...Array(12).keys()].map(x => x + 1)

  return (
    <AppContainer>
      <h1>Une merveilleuse histoire de Nicolas Cage</h1>

      <StoryContainer>
        <h3>{stepText[step]}</h3>
        <FlexBox step={step} />
      </StoryContainer>

      <NavigationContainer>
        <StyledIcon icon={faStepBackward} onClick={() => step !== 1 && setStep(step - 1)} disabled={step === 1} />
        {stepNumbers.map((x) => (
          <Button active={step === x} disabled={step === x} onClick={() => setStep(x)}>{x}</Button>
        ))}
        <StyledIcon icon={faStepForward} onClick={() => step !== 12 && setStep(step + 1)} disabled={step === 12} />
      </NavigationContainer>
    </AppContainer>
  )
}

export default App
