import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { TransactionContextProvider } from './contexts/TransactionContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <TransactionContextProvider>
          <Router />
        </TransactionContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
