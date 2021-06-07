import styled, { css } from 'styled-components'


const styleStep1 = css`
  justify-content: center;
`
const styleStep2 = css`
  justify-content: space-between;
  align-items: flex-end;
`
const styleStep3 = css`
  justify-content: space-around;
  align-items: flex-end;
`
const styleStep4 = css`
  justify-content: center;
  align-items: flex-end;
`
const styleStep5 = css`
  border-bottom: 3px solid brown;
`
const styleStep6 = css`
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 3px solid brown;
`
const styleStep7 = css`
  justify-content: space-between;
  align-items: center;
`
const styleStep8 = css`
  justify-content: space-between;
  align-items: center;
  column-gap: 3rem;
`
const styleStep9 = css`
  flex-wrap: wrap;
  width: 85%
`
const styleStep10 = css``
const styleStep11 = css`
  justify-content: center;
`
const styleStep12 = css``


const Container = styled.div`
  display: flex;
  padding: 0 1rem;
  ${({ step }) => eval(`styleStep${step}`)};
`

const NicolasCage = styled.div`
  display: flex;
  flex-direction: column;
  height:  ${({ step }) => step >= 10 && '60vh'};
  order: ${({ step }) => step === 9 && '3'};
`

const Saphira = styled.img`
  height: ${({ step }) => step === 11 ? '2px' : '20%'};
`

const Fire = styled.img`
  transform: rotate(45deg);
  height: ${({ step }) => [8, 9].includes(step) && '30%'};
`

const Body = styled.img`
  flex-grow: ${({ step }) => step >= 10 && '1'};
`

const FlexBox = ({ step }) => (
  <Container step={step}>
    <NicolasCage step={step}>
      <img src="/nicolas-cage.png" alt="nicolas head" height="100px" />
      <Body src="/body.png" alt="nicolas body" height="50px" step={step} />
      <img src="/feet.png" alt="nicolas feet" height="50px" />
    </NicolasCage>

    {[2, 3, 4].includes(step) && <img src="/forest.png" alt="forest" height="100px" />}
    {[7, 8, 9].includes(step) && <Fire src="/fire.png" alt="fire" height="100px" step={step} />}
    {step > 5 && step < 12 && <Saphira src="/dragon.png" alt="forest" step={step} />}
  </Container>
)

export default FlexBox
