import { Link } from 'react-router-dom'
import {
  ButtonRestritration,
  ContainerRegistration,
  FormControl,
  FormRegistration,
  InputForm,
  LinkRegistration,
} from './styles'

export function RegistrationBooks() {
  return (
    <ContainerRegistration>
      <div>
        <h1>Formulário de cadastro</h1>
        <LinkRegistration to="/list-products">
          Lista de produtos
        </LinkRegistration>
        <FormRegistration action="">
          <FormControl>
            <label htmlFor="">Descrição</label>
            <InputForm type="text" />
          </FormControl>
          <FormControl>
            <label htmlFor="">Preço</label>
            <InputForm type="text" />
          </FormControl>
          <FormControl>
            <label htmlFor="">Categoria</label>
            <InputForm type="text" />
          </FormControl>
          <FormControl>
            <ButtonRestritration type="submit">Cadastrar</ButtonRestritration>
          </FormControl>
        </FormRegistration>
      </div>
    </ContainerRegistration>
  )
}
