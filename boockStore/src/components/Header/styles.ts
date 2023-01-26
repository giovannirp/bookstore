import styled from "styled-components";

export const ContainerHeader = styled.header`
  background: ${(props) => props.theme["green-700"]};
  padding: 2.5rem 0 7.6rem;
  height: 212px;
  border-bottom: 2px solid ${props => props.theme["green-300"]};

`

export const ContentHeader = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;  
`

export const ButtonRegistration = styled.div`
  background: ${(props => props.theme["green-500"])};
  border: 2px solid ${props => props.theme["green-300"]};

  color: ${(props) => props.theme.white};
  border-radius: 6px;
  max-width: 152px;
  height: 50px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s;

  cursor: pointer;

  &:hover {
    background: ${(props => props.theme["gray-900"])};

  }
`