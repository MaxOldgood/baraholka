import filtersSlice from './model/filters-slice'

export { Filters } from './ui'

export { filtersSlice }

export {
  searchValueChanged,
  selectedCategoriesChanged,
  minPriceChanged,
  maxPriceChanged,
  resetFilters,
  showFiltersMobile,
  hideFiltersMobile,
} from '../filters/model/filters-slice'
