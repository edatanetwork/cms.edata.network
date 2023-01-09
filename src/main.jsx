import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Toaster } from 'react-hot-toast'

import { Provider } from 'react-redux'
import { store } from 'app/store'

import App from './App'
import './main.css'

const theme = {
  clrError: '#E20041',
  clrLightRed: '#ffeaea',
  clrPlaceholder: '#717285',
  clrOrange: '#FF7F00',
  clrGray: '#EBEEF1',
  clrBlack50: 'rgba(0,0,0,0.5)',
  borderGray: '1px solid #EBEEF1',
  clrLightGray: '#f7f7f7',
  topbarHeight: '4.5rem',
  filterbarHeight: '4rem',
  tableRowHeight: '50px',
  paginationHeight: '3rem'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
      <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff'
          }
        }}
      />
    </Provider>
  </ThemeProvider>
)
