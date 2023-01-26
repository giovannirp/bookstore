import { SearchForm } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'

export function Search() {
  return(
    <SearchForm>
      <input 
        type="text"
        placeholder="Busque um livro"
      />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchForm>
  )
}