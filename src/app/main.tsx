import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App'
import './styles/styles.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Auth } from '../pages/auth/auth'
import { Details } from '../pages/details/details'
import { Shop } from '../pages/home/shop'
import { About } from '../pages/about/about'
import { User } from '../pages/user/user'
import { Cart } from '../pages/cart/cart'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/shop',
          element: <Shop />,
        },
        {
          path: 'shop/:productId',
          element: <Details />,
        },
        {
          path: '/auth',
          element: <Auth />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/user',
          element: <User />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
      ],
    },
  ])

  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
