import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.find((product) => product.id === action.payload.id) ? null : state.products.push(action.payload)
    },
    incrementCount(state, action) {
      state.products.map((product) => (product.id === action.payload ? product.count++ : product))
    },
    decrementCount(state, action) {
      state.products.map((product) => (product.id === action.payload ? product.count-- : product))
    },
    deleteProduct(state, action) {
      state.products = state.products.filter((product) => product.id !== action.payload)
    },
  },
})

export const { addProduct, incrementCount, decrementCount, deleteProduct } = cartSlice.actions
export default cartSlice.reducer
