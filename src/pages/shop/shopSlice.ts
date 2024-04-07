import { apiSlice } from '../../shared/api/api-slice'
import { RootState } from '../../shared/store/store'

export const getFilteredProductsList = (state: RootState) => {
  const filters = state.filters
  const { data: productsData } = apiSlice.endpoints.getAllProducts.select()(state)

  return productsData
    ?.filter((product) => {
      return filters.selectedCategories.length > 0 ? filters.selectedCategories.includes(product.category) : true
    })
    .filter((product) => {
      return product.price >= filters.minPrice && product.price <= filters.maxPrice
    })
    .filter((product) => {
      return (
        product.title.toLowerCase().includes(filters.searchValue.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.searchValue.toLowerCase())
      )
    })
}
