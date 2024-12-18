import { createBrowserRouter } from 'react-router-dom'
import { HomeBody } from '../components/HomeBody'
import { Post } from '../pages/[id]'

export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeBody />,
  },
  {
    path: '/issue/:id',
    element: <Post />,
  },
])
