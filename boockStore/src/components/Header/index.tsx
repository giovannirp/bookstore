import { ButtonRegistration, ContainerHeader, ContentHeader } from './styles'
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <ContainerHeader>
      <ContentHeader>
        <img src={logo} width="80" alt="" />

        <ButtonRegistration>Cadastrar Livros</ButtonRegistration>
      </ContentHeader>
    </ContainerHeader>
  )
}
