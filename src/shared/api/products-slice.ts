import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Product {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
  raiting: {
    rate: number
    count: number
  }
}

export const productsSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com',
  }),
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
  endpoints: (build) => ({
    getAllProducts: build.query<Product[], number>({
      query: (limit) => `/products?limit=${limit}`,
    }),
  }),
})

export const { useGetAllProductsQuery } = productsSlice
