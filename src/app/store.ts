import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from '../shared/api/api-slice'
import filtersReducer from '../widgets/filters/filters-slice'
import sortReducer from '../widgets/sort/sort-slice'

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    sort: sortReducer,
    [productsSlice.reducerPath]: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsSlice.middleware)
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
