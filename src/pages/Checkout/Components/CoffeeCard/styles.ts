import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const CheckoutCoffeeCardContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    display: flex;
    gap: 0.5rem;

    .title {
      ${mixins.fonts.textM};
      color: ${(props) => props.theme.colors['base-subtitle']};
    }

    .subtitle {
      ${mixins.fonts.textS};
      color: ${(props) => props.theme.colors['base-text']};
    }
  }
`
