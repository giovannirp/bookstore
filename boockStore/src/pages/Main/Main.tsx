import { Header } from "../../components/Header";
import { Search } from "./components/Search";
import { MainContainer, TableMain } from "./styles";

export function Main() {
  return (
    <div>
      <Header />
      <MainContainer>
        <Search />

        <TableMain>
          <tbody>
            <tr>
              <td width="50%">Livro de HTML5</td>
              <td>12.000,00</td>
              <td>Venda</td>
              <td>2023-01-25T15:38:55.826Z</td>
            </tr>
            <tr>
              <td width="50%">Ikigai o caminho da felicidade</td>
              <td>12.000,00</td>
              <td>Venda</td>
              <td>2023-01-25T15:38:55.826Z</td>
            </tr>
          </tbody>
        </TableMain>
      </MainContainer>
    </div>
  )
}