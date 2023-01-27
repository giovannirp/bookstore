import { useContext } from 'react'
import { BooksContext } from '../../contexts/BooksContext'
import { dateFormater } from '../../ultis/formatter'

import { ContainerListProducts } from './styles'

export function ListProducts() {
  const { books } = useContext(BooksContext)

  return (
    <ContainerListProducts>
      <h2>Lista de produtos</h2>
      <table>
        <tbody>
          <tr>
            <th>Produto</th>
            <th>Data</th>
          </tr>
          {books.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td>{dateFormater.format(new Date(item.createdAt))}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </ContainerListProducts>
  )
}
