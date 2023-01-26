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
}

export const BooksContext = createContext({} as BooksContextType)

interface BooksProviderProps {
  children: ReactNode
}

export function BooksContextProvider({ children }: BooksProviderProps) {
  const [books, setBooks] = useState<Books[]>([])

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
    <BooksContext.Provider value={{ books }}>{children}</BooksContext.Provider>
  )
}
