import { createSlice } from '@reduxjs/toolkit'
import { CartProduct } from '../../product/model/types'

interface CartState {
  products: CartProduct[]
}

const initialState: CartState = {
  products: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.find((product: CartProduct) => product.id === action.payload.id)
        ? null
        : state.products.push(action.payload)
    },
    incrementCount(state, action) {
      state.products.map((product: CartProduct) => (product.id === action.payload ? product.count++ : product))
    },
    decrementCount(state, action) {
      state.products.map((product: CartProduct) => (product.id === action.payload ? product.count-- : product))
    },
    deleteProduct(state, action) {
      state.products = state.products.filter((product: CartProduct) => product.id !== action.payload)
    },
  },
})

export const { addProduct, incrementCount, decrementCount, deleteProduct } = cartSlice.actions
export default cartSlice.reducer
