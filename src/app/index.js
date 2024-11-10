import { RouterProvider } from 'react-router-dom';

import { router } from './router';

import { Loading } from '../shared/ui/Loading'

export default function App() {
  return <RouterProvider router={router} fallbackElement=<Loading /> />
}