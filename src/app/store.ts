import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../entities/cart/model/cart-slice'
import sortReducer from '../features/sort/sort-slice'
import { productsSlice } from '../shared/api/api-slice'
import filtersReducer from '../widgets/filters/filters-slice'

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    sort: sortReducer,
    cart: cartReducer,
    [productsSlice.reducerPath]: productsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsSlice.middleware)
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
