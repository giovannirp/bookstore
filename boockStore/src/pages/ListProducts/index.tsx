import { useContext } from 'react'
import { BooksContext } from '../../contexts/BooksContext'
import { dateFormater } from '../../ultis/formatter'

import { ContainerListProducts, TableMain, TdUnic, ThUnic } from './styles'

export function ListProducts() {
  const { books } = useContext(BooksContext)

  const deleteButton = (item: any) => {
    console.log(item)
    // https://jasonwatmore.com/post/2021/09/21/fetch-http-delete-request-examples
  }

  return (
    <ContainerListProducts>
      <h2>Lista de produtos</h2>
      <TableMain>
        <tbody>
          <tr>
            <ThUnic>ID</ThUnic>
            <th>Produto</th>
            <th>Data</th>
            <th>Exluir</th>
          </tr>
          {books.map((item) => {
            return (
              <tr key={item.id}>
                <TdUnic>
                  <input type="text" disabled value={item.id} />
                </TdUnic>
                <td>{item.description}</td>
                <td>{dateFormater.format(new Date(item.createdAt))}</td>
                <td>
                  <button onClick={() => deleteButton(item.id)}>
                    Botão {item.id}
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </TableMain>
    </ContainerListProducts>
  )
}
