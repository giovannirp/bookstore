import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { BooksContextProvider } from './contexts/BooksContext'
import { Main } from './pages/Main/Main'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BooksContextProvider>
        {/* <Main /> */}
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BooksContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
