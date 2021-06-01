import styled, { css } from 'styled-components'


const styleStep1 = css``
const styleStep2 = css``
const styleStep3 = css``
const styleStep4 = css``
const styleStep5 = css``
const styleStep6 = css``
const styleStep7 = css``
const styleStep8 = css``
const styleStep9 = css``
const styleStep10 = css``
const styleStep11 = css``
const styleStep12 = css``


const Container = styled.div`
  display: flex;
  padding: 0 1rem;
  ${({ step }) => eval(`styleStep${step}`)};
`

const NicolasCage = styled.div`
`

const FlexBox = ({ step }) => (
  <Container step={step}>
    <NicolasCage step={step}>
      <img src="/nicolas-cage.png" alt="nicolas head" height="100px" />
      <img src="/body.png" alt="nicolas body" height="50px" />
      <img src="/feet.png" alt="nicolas feet" height="50px" />
    </NicolasCage>

    {[2, 3, 4].includes(step) && <img src="/forest.png" alt="forest" height="100px" />}
    {[7, 8, 9].includes(step) && <img src="/fire.png" alt="forest" height="100px" />}
    {step > 5 && step < 12 && <img src="/dragon.png" alt="forest" height="100px" />}
  </Container>
)

export default FlexBox
