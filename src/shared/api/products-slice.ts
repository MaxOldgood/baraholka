import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com',
  }),
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => '/products',
    }),
  }),
})

export const { useGetAllProductsQuery } = productsSlice
