import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/App.jsx'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from '~/theme'

//Config react toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ConfirmProvider } from 'material-ui-confirm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} disableNestedContext>
      <ConfirmProvider defaultOptions={{
        allowClose: false,
        buttonOrder: ['confirm', 'cancel'],
        cancellationButtonProps: {
          sx: {
            backgroundColor: 'error.dark',
            color: '#fff'
          }
        },
        confirmationButtonProps: {
          sx: {
            backgroundColor: '#1976d2',
            color: '#fff'
          }
        }
      }}>
        <CssBaseline />
        <App />
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          theme="colored"
        />
      </ConfirmProvider>
    </ThemeProvider>
  </React.StrictMode>
)
