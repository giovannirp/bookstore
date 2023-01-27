import {
  ButtonRegistration,
  ContainerHeader,
  ContentHeader,
  LinkLogo,
} from './styles'
import logo from '../../assets/logo.png'
import { useContext } from 'react'
import { BooksContext } from '../../contexts/BooksContext'

export function Header() {
  const { books } = useContext(BooksContext)

  return (
    <ContainerHeader>
      <ContentHeader>
        <LinkLogo to="/">
          <img src={logo} width="80" alt="" />
        </LinkLogo>

        <ButtonRegistration to="/registration">
          Cadastrar Livros
        </ButtonRegistration>
      </ContentHeader>
    </ContainerHeader>
  )
}
