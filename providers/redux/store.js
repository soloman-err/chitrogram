import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './reducers/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
