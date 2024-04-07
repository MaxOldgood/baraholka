import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../../entities/cart/model/cart-slice'
import sortReducer from '../../features/sort-products/sort-slice'
import filtersReducer from '../../widgets/filters/model/filters-slice'
import { apiSlice } from '../api/api-slice'

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    sort: sortReducer,
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
