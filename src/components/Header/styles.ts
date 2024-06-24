import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.5rem;
      border-radius: 0.5rem;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      text-decoration: none;
    }

    .map {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      size: 1.375rem;
      color: ${(props) => props.theme.colors['purple-dark']};
      background-color: ${(props) => props.theme.colors['purple-light']};

      span {
        font-weight: ${mixins.fonts.textS};
      }
    }

    .cart {
      position: relative;
      size: 1.375rem;
      color: ${(props) => props.theme.colors['yellow-dark']};
      background-color: ${(props) => props.theme.colors['yellow-light']};

      span {
        font-size: 0.8rem;
        width: 1.25rem;
        height: 1.25rem;
        position: absolute;
        top: -0.5rem;
        right: -0.9rem;
        border-radius: 50%;
        color: ${(props) => props.theme.colors['yellow-light']};
      }

      &::before {
        content: '';
        width: 1.25rem;
        height: 1.25rem;
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors['yellow-dark']};
      }
    }
  }
`
