import { ButtonRegistration, ContainerHeader, ContentHeader } from './styles'
import logo from '../../assets/logo.png'
import { useContext } from 'react'
import { BooksContext } from '../../contexts/BooksContext'

export function Header() {
  const { books } = useContext(BooksContext)

  console.log('estou no header', books)
  return (
    <ContainerHeader>
      <ContentHeader>
        <img src={logo} width="80" alt="" />

        <ButtonRegistration>Cadastrar Livros</ButtonRegistration>
      </ContentHeader>
    </ContainerHeader>
  )
}
