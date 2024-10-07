import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from './theme'
import { getInitColorSchemeScript } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {getInitColorSchemeScript()}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      < App />
    </ThemeProvider>
  </React.StrictMode>
)
