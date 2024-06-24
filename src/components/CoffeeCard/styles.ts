import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CoffeeCardContainer = styled.div`
  position: relative;
  width: 16rem;
  padding: 1.25rem 1.5rem;
  border-radius: 10px;
  border-top-right-radius: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  background-color: ${(props) => props.theme.colors['base-card']};

  text-align: center;

  img {
    position: absolute;
    top: -0.938rem;
  }

  h3 {
    ${mixins.fonts.titleS};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  p {
    ${mixins.fonts.textS};
    color: ${(props) => props.theme.colors['base-label']};
  }
`

export const CoffeeCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  margin-top: 7rem;

  span {
    ${mixins.fonts.tag};
    color: ${(props) => props.theme.colors['yellow-dark']};
    background-color: ${(props) => props.theme.colors['yellow-light']};
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
  }
`

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    ${mixins.fonts.textS};
    color: ${(props) => props.theme.colors['base-text']};

    span {
      ${mixins.fonts.titleM};
    }
  }
`
