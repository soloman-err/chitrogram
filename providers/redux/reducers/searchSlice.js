import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
};

export const searchSlice = createSlice({
  name: 'searchContent',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});
