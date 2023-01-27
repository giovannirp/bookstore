import styled from 'styled-components'

export const ContainerListProducts = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TableMain = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  th {
    padding: 1.25rem 2rem;
    text-align: left;
    color: ${(props) => props.theme['green-300']};
    border: 1px solid ${(props) => props.theme.white};

    &:first-child {
      border-bottom-left-radius: 6px;
      border-top-left-radius: 6px;
    }

    &:last-child {
      border-bottom-right-radius: 6px;
      border-top-right-radius: 6px;
    }
  }

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme['gray-600']};
    border: 1px solid ${(props) => props.theme.white};

    &:first-child {
      border-bottom-left-radius: 6px;
      border-top-left-radius: 6px;
    }

    &:last-child {
      border-bottom-right-radius: 6px;
      border-top-right-radius: 6px;
    }

    input {
      color: ${(props) => props.theme['green-500']};
      background-color: ${(props) => props.theme.white};
      border: 0;
      font-weight: bold;
      max-width: 40px;
      height: 30px;
      text-align: center;
    }
  }
`

export const TdUnic = styled.td`
  display: flex;
  justify-content: center;
`

export const ThUnic = styled.td`
  display: flex;
  justify-content: center;
`
