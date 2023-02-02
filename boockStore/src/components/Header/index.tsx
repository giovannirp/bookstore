import {
  ButtonRegistration,
  ContainerHeader,
  ContentHeader,
  ContentInfo,
  LinkDoubt,
  LinkLogo,
} from './styles'
import logo from '../../assets/logo.png'
import { useContext } from 'react'
import { BooksContext } from '../../contexts/BooksContext'
import { Link } from 'react-router-dom'
import { Info } from 'phosphor-react'

export function Header() {
  const { books } = useContext(BooksContext)

  return (
    <ContainerHeader>
      <ContentHeader>
        <LinkLogo to="/">
          <img src={logo} width="80" alt="" />
        </LinkLogo>
        <ContentInfo>
          <Info size={32} />
          <LinkDoubt to="/doubt">Tire duvidas</LinkDoubt>
        </ContentInfo>
        <ButtonRegistration to="/registration">
          Cadastrar Livros
        </ButtonRegistration>
      </ContentHeader>
    </ContainerHeader>
  )
}
