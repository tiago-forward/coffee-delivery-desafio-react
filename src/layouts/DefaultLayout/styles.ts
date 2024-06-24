import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  margin: auto;
  padding: 2.5rem;
  background: ${(props) => props.theme.colors.background};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
