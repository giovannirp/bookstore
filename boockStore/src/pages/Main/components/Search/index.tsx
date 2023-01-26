import { SearchForm } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { useState } from 'react'

export function Search() {
  const initialForm = {
    search: '',
  }

  const [formState, setFormState] = useState(initialForm)

  const handleInput = (event: any) => {
    const target = event.currentTarget
    const { value, name } = target

    setFormState({ ...formState, [name]: value })
  }

  const handleSubmitSearch = (event: any) => {
    event.preventDefault()

    if (formState.search === '') {
      alert('Preencha o campo de busca')
      return false
    }
    console.log('ola teste')
  }

  const isButtonSearch = formState.search.length === 0

  return (
    <SearchForm onSubmit={handleSubmitSearch}>
      <input
        type="text"
        name="search"
        value={formState.search}
        onChange={handleInput}
        placeholder="Busque um livro"
      />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchForm>
  )
}
