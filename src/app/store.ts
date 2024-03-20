import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from '../shared/api/products-slice'
import filtersReducer from '../widgets/filters/filters-slice'

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [productsSlice.reducerPath]: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsSlice.middleware)
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
