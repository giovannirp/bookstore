import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerRegistration = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const FormControl = styled.section`
  border: 2px dotted ${(props) => props.theme['green-300']};
  padding: 5px;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  label {
    padding-right: 20px;
  }
`

export const InputForm = styled.input`
  height: 28px;
  width: 100%;
  max-width: 300px;
  padding: 10px;
  border: 0;
  border-radius: 4px;
`

export const FormRegistration = styled.form`
  max-width: 450px;
`

export const ButtonRestritration = styled.button`
  max-width: 150px;
  width: 100%;
  border: 0;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  cursor: pointer;
`
export const LinkRegistration = styled(Link)`
  display: flex;
  color: ${(props) => props.theme.white};
  margin-top: 20px;
  margin-bottom: 20px;
`
