import { productsSlice } from '../../shared/api/products-slice'

export const getFilteredProductsList = (state) => {
  const filters = state.filters
  const { data: productsData } = productsSlice.endpoints.getAllProducts.select()(state)

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
