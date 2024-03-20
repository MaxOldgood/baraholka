import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../../entities/product'

interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export type Categories = string[]

export const productsSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
  endpoints: (build) => ({
    getAllProducts: build.query<Product[], void>({
      query: () => `/products?limit=0`,
      transformResponse: (response: ProductsResponse) => {
        return response.products.filter((product) => {
          return (
            product.category === 'smartphones' ||
            product.category === 'laptops' ||
            product.category === 'mens-watches' ||
            product.category === 'womans-watches' ||
            product.category === 'lighting'
          )
        })
      },
    }),
    getAllCategoties: build.query<Categories, void>({
      query: () => `/products/categories`,
      transformResponse: (response: Categories) =>
        response.filter(
          (category) =>
            category === 'smartphones' ||
            category === 'laptops' ||
            category === 'mens-watches' ||
            category === 'womans-watches' ||
            category === 'lighting',
        ),
    }),
  }),
})

export const { useGetAllProductsQuery, useGetAllCategotiesQuery } = productsSlice
