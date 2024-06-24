import styled from 'styled-components'

export const ButtonCartContainer = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  background-color: ${(props) => props.theme.colors['purple-dark']};
  color: ${(props) => props.theme.colors.white};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`
