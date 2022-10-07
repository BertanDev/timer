import { ThemeProvider } from 'styled-components'

import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
      <ThemeProvider theme={defaultTheme}>

        <CyclesContextProvider>
          <Router/>
        </CyclesContextProvider>
        
        <GlobalStyle/>

      </ThemeProvider>
  )
}


