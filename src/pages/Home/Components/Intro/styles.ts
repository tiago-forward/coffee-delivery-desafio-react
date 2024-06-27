import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const IntroSection = styled.section`
  display: flex;
  justify-content: space-between;

  margin-top: 8.563rem;
`

export const TitleContainer = styled.div`
  h1 {
    ${mixins.fonts.titleXL};
    color: ${(props) => props.theme.colors['base-title']};
    margin-bottom: 1rem;
  }

  p {
    ${mixins.fonts.textL};
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 4.125rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.25rem;
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .iconContainer {
      width: 2.375rem;
      height: 2.375rem;
      color: ${(props) => props.theme.colors.background};
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    span {
      ${mixins.fonts.textM};
      color: ${(props) => props.theme.colors['base-text']};
    }
  }
`
