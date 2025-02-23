import { configureStore } from '@reduxjs/toolkit'
import habitSlice from '../slices/habitSlice'
import { loadState, saveState } from '../uitils/localStorage'

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    habit: habitSlice
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({habit: store.getState().habit});
});