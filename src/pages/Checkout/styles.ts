import styled from 'styled-components'

export const CheckoutPageContainer = styled.main`
  margin: auto;
  padding-top: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 28rem;
  grid-gap: 2rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const PaymentCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`
