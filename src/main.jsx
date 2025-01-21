import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/App.jsx'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from '~/theme'

//Config react toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} disableNestedContext>
      <CssBaseline />
      <App />
      <ToastContainer position='bottom-left' autoClose={3000} theme='colored' />
    </ThemeProvider>
  </React.StrictMode>
)
