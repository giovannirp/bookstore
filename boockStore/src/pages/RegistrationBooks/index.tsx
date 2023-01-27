import { useState } from 'react'
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
  const initilForm = {
    description: '',
    type: '',
    price: '',
    category: '',
    createdAt: '',
  }

  const [registration, setRegistration] = useState<String[]>([])
  const [formState, setFormState] = useState(initilForm)

  const handleInput = (event: any) => {
    const target = event.currentTarget
    const { value, name } = target

    setFormState({ ...formState, [name]: value })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const formGeneral = {
      description: formState.description,
      type: formState.type,
      category: formState.category,
      price: formState.price,
      createdAt: new Date(),
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formGeneral),
    }

    fetch('http://localhost:3000/books', requestOptions)
      .then((response) => response.json())
      .then((data) => setRegistration(data))
  }

  return (
    <ContainerRegistration>
      <div>
        <h1>Formulário de cadastro</h1>
        <LinkRegistration to="/list-products">
          Lista de produtos
        </LinkRegistration>
        <FormRegistration onSubmit={handleSubmit}>
          <FormControl>
            <label htmlFor="">Descrição</label>
            <InputForm
              type="text"
              name="description"
              value={formState.description}
              onChange={handleInput}
            />
          </FormControl>
          <FormControl>
            <label htmlFor="">Preço</label>
            <InputForm
              type="text"
              name="price"
              value={formState.price}
              onChange={handleInput}
            />
          </FormControl>
          <FormControl>
            <label htmlFor="">Categoria</label>
            <InputForm
              type="text"
              name="category"
              value={formState.category}
              onChange={handleInput}
            />
          </FormControl>
          <FormControl>
            <ButtonRestritration type="submit">Cadastrar</ButtonRestritration>
          </FormControl>
        </FormRegistration>
      </div>
    </ContainerRegistration>
  )
}
