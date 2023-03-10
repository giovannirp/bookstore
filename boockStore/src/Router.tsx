import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { About } from './pages/About'
import { Doubt } from './pages/Doubt'
import { ListProducts } from './pages/ListProducts'
import { Main } from './pages/Main/Main'
import { NotFound } from './pages/NotFound'
import { RegistrationBooks } from './pages/RegistrationBooks'
import { Teste } from './pages/Teste'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<RegistrationBooks />} />
        <Route path="/list-products" element={<ListProducts />} />
        <Route path="/doubt" element={<Doubt />} />
        <Route path="/about" element={<About />} />
        <Route path="/teste" element={<Teste />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
