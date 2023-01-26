import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Main } from './pages/Main/Main'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  )
}

export default App
