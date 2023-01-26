import { createContext, ReactNode, useEffect, useState } from 'react'

interface Books {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  createdAt: number
  category: string
}

interface BooksContextType {
  books: Books[]
  fetchBooks: (query?: string) => Promise<void>
}

export const BooksContext = createContext({} as BooksContextType)

interface BooksProviderProps {
  children: ReactNode
}

export function BooksContextProvider({ children }: BooksProviderProps) {
  const [books, setBooks] = useState<Books[]>([])

  async function fetchBooks(query?: string) {
    const url = 'http://localhost:3000/books'

    if (query) {
      url.searchParams.append('q', query)
    }

    const res = await fetch(url)
    const data = await res.json()

    setBooks(data)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <BooksContext.Provider value={{ books, fetchBooks }}>
      {children}
    </BooksContext.Provider>
  )
}
