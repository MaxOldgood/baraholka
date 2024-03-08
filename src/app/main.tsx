import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/styles.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from '../pages/about/about'
import { Auth } from '../pages/auth/auth'
import { Cart } from '../pages/cart/cart'
import { Details } from '../pages/details/details'
import { Shop } from '../pages/home/shop'
import { User } from '../pages/user/user'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  const router = createBrowserRouter([
    {
      path: '/baraholka/',
      element: <App />,
      children: [
        {
          path: '/baraholka/shop',
          element: <Shop />,
        },
        {
          path: '/baraholka/shop/:productId',
          element: <Details />,
        },
        {
          path: '/baraholka/auth',
          element: <Auth />,
        },
        {
          path: '/baraholka/about',
          element: <About />,
        },
        {
          path: '/baraholka/user',
          element: <User />,
        },
        {
          path: '/baraholka/cart',
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
