import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const SuccessContainer = styled.main`
  margin: auto;

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 1fr;
    gap: 2rem;
    margin-top: 5rem;

    .header {
      grid-column: span 2;

      h2 {
        ${mixins.fonts.titleL};
        color: ${(props) => props.theme.colors['yellow-dark']};
      }

      p {
        ${mixins.fonts.textL};
        color: ${(props) => props.theme.colors['base-subtitle']};
      }
    }

    .detailsBorderContainer {
      position: relative;
      padding: 2px;
      background: linear-gradient(
        310deg,
        rgba(128, 71, 248, 1) 0%,
        rgba(219, 172, 44, 1) 100%
      );
      border-radius: 6px 36px 6px 36px;

      &::before {
        content: '';
        position: absolute;
        top: 1px;
        right: 1px;
        bottom: 1px;
        left: 1px;
        background: white;
        border-radius: 6px 36px 6px 36px;
        z-index: 1;
      }
    }

    .details {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      z-index: 2;

      list-style-type: none;

      padding: 40px 40px 40px 40px;

      li {
        padding: 0.313rem 0rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      p {
        ${mixins.fonts.textM};
        color: ${(props) => props.theme.colors['base-text']};
      }

      span {
        ${mixins.fonts.textM};
        color: ${(props) => props.theme.colors['base-text']};
        font-weight: bold;
      }
    }
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
`
