import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CheckoutPageContainer = styled.main`
  margin: auto;
  padding-top: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 28rem;
  grid-gap: 2rem;

  .titleSection {
    ${mixins.fonts.titleXS};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

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

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  padding: 0.5rem 0.25rem 2rem 0.25rem;

  span {
    ${mixins.fonts.textM};
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const SelectedCoffees = styled.div`
  display: flex;
  gap: 1.25rem;
  text-transform: capitalize;

  p {
    ${mixins.fonts.textM};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  text-transform: capitalize;
`

export const PricesCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  p {
    ${mixins.fonts.textS};
    color: ${(props) => props.theme.colors['base-text']};
  }

  span {
    ${mixins.fonts.textM};
    color: ${(props) => props.theme.colors['base-text']};
  }

  .total {
    ${mixins.fonts.textL};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  .priceTotal {
    ${mixins.fonts.textL};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  button {
    ${mixins.fonts.buttonG};
    background-color: ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors.white};
    padding: 0.75rem;
    border-radius: 6px;
    margin-top: 0.75rem;
    text-transform: uppercase;
  }
`
