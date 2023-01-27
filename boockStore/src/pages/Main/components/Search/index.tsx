import { SearchForm } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { BooksContext } from '../../../../contexts/BooksContext'

import { useContext } from 'react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Search() {
  const { fetchBooks } = useContext(BooksContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearch(data: SearchFormInputs) {
    if (data.query === '') {
      alert('Digite o campoque está vazio')
      return false
    }
    await fetchBooks(data.query)
  }

  return (
    <SearchForm onSubmit={handleSubmit(handleSearch)}>
      <input
        type="text"
        placeholder="Busque um livro New"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchForm>
  )
}
