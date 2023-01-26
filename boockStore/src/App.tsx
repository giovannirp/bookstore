import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { BooksContextProvider } from './contexts/BooksContext'
import { Main } from './pages/Main/Main'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BooksContextProvider>
        <Main />
      </BooksContextProvider>
    </ThemeProvider>
  )
}

export default App
