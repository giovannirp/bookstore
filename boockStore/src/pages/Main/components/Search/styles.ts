import styled from 'styled-components'

export const SearchForm = styled.form`
  display: flex;
  gap: 1rem;

  input {
    width: 100%;
    max-width: 957px;
    padding: 1rem;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-500']};
    border-radius: 6px;
    padding-left: 10px;
    border: 0;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    cursor: pointer;
    gap: 0.75rem;

    align-items: center;
    justify-content: center;
    max-width: 147px;
    padding: 1rem;
    border-radius: 6px;
    font-size: 16px;
    border: 2px solid ${(props) => props.theme['green-300']};
    background: transparent;
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:hover {
      background: ${(props) => props.theme['green-500']};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
      color: ${(props) => props.theme.white};
    }
  }
`
