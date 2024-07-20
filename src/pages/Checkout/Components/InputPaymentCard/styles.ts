import styled, { css } from 'styled-components'
import { mixins } from '../../../../styles/mixins'

interface PaymentCardContainerProps {
  isSelected: boolean
}

export const PaymentCardContainer = styled.label<PaymentCardContainerProps>`
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
  border: 1px solid transparent;
  cursor: pointer;

  input {
    display: none;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 1px solid ${({ theme }) => theme.colors['purple-dark']};
    `}
`
