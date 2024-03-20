import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Categories } from '../../shared/api/api-slice'

interface State {
  searchValue: string
  selectedCategories: Categories
  minPrice: number
  maxPrice: number
}

const initialState: State = {
  searchValue: '',
  selectedCategories: [],
  minPrice: 0,
  maxPrice: 2000,
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    searchValueChanged(state, action) {
      state.searchValue = action.payload
    },
    selectedCategoriesChanged(state, action) {
      state.selectedCategories.includes(action.payload)
        ? (state.selectedCategories = state.selectedCategories.filter((category) => category !== action.payload))
        : state.selectedCategories.push(action.payload)
    },
    minPriceChanged(state, action) {
      state.minPrice = action.payload
    },
    maxPriceChanged(state, action) {
      state.maxPrice = action.payload
    },
    resetFilters(state) {
      state.searchValue = initialState.searchValue
      state.selectedCategories = initialState.selectedCategories
      state.minPrice = initialState.minPrice
      state.maxPrice = initialState.maxPrice
    },
  },
})

export const { searchValueChanged, selectedCategoriesChanged, minPriceChanged, maxPriceChanged, resetFilters } =
  filtersSlice.actions
export default filtersSlice.reducer
