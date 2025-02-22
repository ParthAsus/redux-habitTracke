import { configureStore } from '@reduxjs/toolkit'
import habitSlice from '../slices/habitSlice'

export const store = configureStore({
  reducer: {
    habit: habitSlice
  },
})