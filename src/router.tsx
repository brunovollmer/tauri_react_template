import Root from '@/routes/root'
import { createBrowserRouter } from 'react-router-dom'
import App from '@/routes/app'

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <App />,
      },
    ],
  },
])

export default router
