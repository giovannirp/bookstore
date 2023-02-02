import styled from 'styled-components'

export const ContainerDoubt = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  h1 {
    margin-bottom: 25px;
  }
`
export const ContentDoubt = styled.section`
  h2 {
    color: ${(props) => props.theme['green-300']};
    font-size: 14px;
    margin-bottom: 5px;
  }

  p {
    line-height: 21px;
    margin-bottom: 15px;
  }
`
