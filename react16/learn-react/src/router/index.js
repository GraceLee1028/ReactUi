import { createBrowserRouter } from 'react-router-dom'
import Login from '@/views/system/login/index.js'
import LayoutMain from '@/views/layout/index.jsx'
import Home from '@/views/system/home/index.jsx'
import User from '@/views/system/user/index.jsx'
import MatchTwo from '@/views/system/match/index.jsx'
import Error from '@/views/layout/error'
const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    errorElement: <Error />,
    children: [
      {
        path: 'home',
        element: <Home />,
        errorElement: <Error />
      },
      {
        path: 'user/:userId',
        element: <User />,
        errorElement: <Error />
      },
      {
        path: 'match',
        element: <MatchTwo />,
        errorElement: <Error />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />
  }
])
export default router
