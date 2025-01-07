import { BrowserRouter } from 'react-router-dom'
import { GlobalStyled, MainProject } from './Styles/globalStyles'
import { Router } from './Routes'
import { ThemeProvider } from 'styled-components'
import { DefaultThemes } from './Styles/theme/default'

function App() {
  return (
    <ThemeProvider theme={DefaultThemes}>
      <BrowserRouter>
        <MainProject>
          <Router />
          <GlobalStyled />
        </MainProject>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
