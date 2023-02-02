import {
  ButtonRegistration,
  ContainerHeader,
  ContentHeader,
  LinkDoubt,
  LinkLogo,
} from './styles'
import logo from '../../assets/logo.png'
import { useContext } from 'react'
import { BooksContext } from '../../contexts/BooksContext'
import { Link } from 'react-router-dom'

export function Header() {
  const { books } = useContext(BooksContext)

  return (
    <ContainerHeader>
      <ContentHeader>
        <LinkLogo to="/">
          <img src={logo} width="80" alt="" />
        </LinkLogo>
        <LinkDoubt to="/doubt">Tire todas suas duvidas</LinkDoubt>
        <ButtonRegistration to="/registration">
          Cadastrar Livros
        </ButtonRegistration>
      </ContentHeader>
    </ContainerHeader>
  )
}
