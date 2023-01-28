import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Search } from './components/Search'
import { MainContainer, TableMain } from './styles'
import { priceFormatter, dateFormater } from '../../ultis/formatter'
import { BooksContext } from '../../contexts/BooksContext'

export function Main() {
  const { books } = useContext(BooksContext)

  return (
    <div>
      <MainContainer>
        <Search />

        <TableMain>
          <tbody>
            {books.length === 0 && (
              <div>Esse item, não existe em nossos cadadastro</div>
            )}
            {books?.map((books) => {
              return (
                <tr key={books.id}>
                  <td width="50%">{books.description}</td>
                  <td>{priceFormatter.format(books.price)}</td>
                  <td>{books.category}</td>
                  <td>{dateFormater.format(new Date(books.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TableMain>
      </MainContainer>
    </div>
  )
}
