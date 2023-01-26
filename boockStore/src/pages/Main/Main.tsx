import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Search } from './components/Search'
import { MainContainer, TableMain } from './styles'

interface Books {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  createdAt: number
  category: string
}

export function Main() {
  const [books, setBooks] = useState<Books[]>()

  async function fetchBooks() {
    const url = 'http://localhost:3000/books'

    const res = await fetch(url)

    const data = await res.json()

    setBooks(data)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div>
      <Header />
      <MainContainer>
        <Search />

        <TableMain>
          <tbody>
            {books?.map((books) => {
              return (
                <tr key={books.id}>
                  <td width="50%">{books.description}</td>
                  <td>{books.price}</td>
                  <td>{books.category}</td>
                  <td>{books.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TableMain>
      </MainContainer>
    </div>
  )
}
