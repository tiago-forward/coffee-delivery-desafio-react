import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const NumberInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors['base-button']};
  padding: 0.5rem;
  width: 4.5rem;

  button {
    background-color: ${(props) => props.theme.colors['base-button']};
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: ${(props) => props.theme.colors.purple};
    font-size: 0.875rem;

    &:hover {
      /* background: #ddd; */
    }
  }

  input {
    border: none;
    text-align: center;
    width: 1.25rem;
    font-size: 16px;
    -moz-appearance: textfield;
    background-color: ${(props) => props.theme.colors['base-button']};
    ${mixins.fonts.textM};

    &:focus {
      outline: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`
