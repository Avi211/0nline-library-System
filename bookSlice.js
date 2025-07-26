import { createSlice } from '@reduxjs/toolkit';
import initialBooks from '../data/books';

const bookSlice = createSlice({
  name: 'books',
  initialState: { list: initialBooks },
  reducers: {
    addBook: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;