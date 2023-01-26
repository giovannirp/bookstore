import { Header } from "../../components/Header";
import { Search } from "./components/Search";
import { MainContainer } from "./styles";

export function Main() {
  return (
    <div>
      <Header />
      <MainContainer>
        <Search />
      </MainContainer>
    </div>
  )
}