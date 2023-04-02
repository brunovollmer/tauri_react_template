import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import store from '@/store/'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
