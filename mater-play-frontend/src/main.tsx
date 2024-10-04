import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const darkTheme = createTheme ({
  palette:{
    mode: 'dark',
    primary:{
      main: '#fff'
    }
  }
})

createRoot(document.getElementById('root')!).render(    // método da API do React 18 para inicializar a renderização do aplicativo
  <StrictMode>
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
