import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { About } from './pages/About'
import { Main } from './pages/Main/Main'
import { RegistrationBooks } from './pages/RegistrationBooks'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<RegistrationBooks />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}
