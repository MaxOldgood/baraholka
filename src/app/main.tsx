import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/styles.scss'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cart } from '../pages/cart/cart'
import { Details } from '../pages/details/details'
import { Shop } from '../pages/shop/shop'
import { store } from './store'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  const router = createBrowserRouter([
    {
      path: '/baraholka/',
      element: <App />,
      children: [
        {
          path: '/baraholka/',
          element: <Shop />,
        },
        {
          path: '/baraholka/product/:productId',
          element: <Details />,
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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
