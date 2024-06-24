import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const OurCoffeesSection = styled.section`
  h2 {
    ${mixins.fonts.titleL};
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 4rem;
  }

  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;

    @media (min-width: 610px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1190px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
