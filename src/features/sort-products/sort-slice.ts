import { createSlice } from '@reduxjs/toolkit'

export const sortByOptions = {
  price: 'price',
  rating: 'rating',
} as const

export type sortBy = keyof typeof sortByOptions
export type ascendent = true | false

interface SortState {
  sortBy: sortBy
  ascendent: ascendent
}

const initialState: SortState = {
  sortBy: sortByOptions.rating,
  ascendent: false,
}

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    sortByChanged(state, action) {
      state.sortBy = action.payload
    },
    sortDirectionChanged(state) {
      state.ascendent = !state.ascendent
    },
  },
})

export const { sortByChanged, sortDirectionChanged } = sortSlice.actions
export default sortSlice.reducer
