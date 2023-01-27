import { useContext } from 'react'
import { BooksContext } from '../../contexts/BooksContext'
import { dateFormater } from '../../ultis/formatter'

import {
  ContainerListProducts,
  TableMain,
  TdUnic,
  ThUnic,
  THUnic,
} from './styles'

export function ListProducts() {
  const { books } = useContext(BooksContext)

  return (
    <ContainerListProducts>
      <h2>Lista de produtos</h2>
      <TableMain>
        <tbody>
          <tr>
            <ThUnic>ID</ThUnic>
            <th>Produto</th>
            <th>Data</th>
          </tr>
          {books.map((item) => {
            return (
              <tr key={item.id}>
                <TdUnic>
                  <input type="text" disabled value={item.id} />
                </TdUnic>
                <td>{item.description}</td>
                <td>{dateFormater.format(new Date(item.createdAt))}</td>
              </tr>
            )
          })}
        </tbody>
      </TableMain>
    </ContainerListProducts>
  )
}
