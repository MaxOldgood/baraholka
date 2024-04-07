import { Categories } from '../../../shared/api/api-slice'

export type FiltetsState = {
  visibleMobile: boolean
  searchValue: string
  selectedCategories: Categories
  minPrice: number
  maxPrice: number
}
