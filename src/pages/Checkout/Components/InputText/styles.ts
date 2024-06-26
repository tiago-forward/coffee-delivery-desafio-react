import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const InputTextContainer = styled.input`
  padding: 0.75rem;
  border: none;
  box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  ${mixins.fonts.textS};
  background-color: ${(props) => props.theme.colors['base-input']};
  color: ${(props) => props.theme.colors['base-text']};

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`
