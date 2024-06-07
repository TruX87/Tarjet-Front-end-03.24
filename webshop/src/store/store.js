import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import cartTotalReducer from './counterTotalSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    cartTotal: cartTotalReducer
  },
})