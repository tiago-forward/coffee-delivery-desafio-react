import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const PaymentCardContainer = styled.button`
  background-color: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors['base-text']};

  ${mixins.fonts.buttonM};
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 8px;
`
