import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Forms, Home, Payment } from '../../pages';

import { Layout } from '../../screens/Layout'

import { instance } from '../../shared/lib/axios';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: async () => {
          return instance.get('', {
            params: {
              apikey: process.env.REACT_APP_API_KEY,
              MethodName: 'OSGetGoodList'
            }
          })
            .catch((error) => {
              return { result: 2, error: error.toJSON() }
            })
        },
      },
      {
        path: 'forms',
        element: <Forms />
      },
      {
        path: 'payment',
        element: <Payment />
      },
      {
        path: '*',
        element: <Navigate to='/' />
      }
    ]
  }
]);