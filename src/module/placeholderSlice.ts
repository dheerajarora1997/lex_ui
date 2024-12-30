import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { firstValueFrom, Observable } from 'rxjs'; // will be use for API calling
import { AppDispatch, RootState } from '../store/index';

export interface placeholderState {
  value?: number;
}

/**
 * Defining a Pre-Typed createAsyncThunk
 * Please refer  https://redux-toolkit.js.org/usage/usage-with-typescript#defining-a-pre-typed-createasyncthunk for more details
 */
const createOrderAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
}>();

console.log(createOrderAsyncThunk, 'createOrderAsyncThunk');

const initialState: placeholderState = {};
const placeholder = createSlice({
  name: 'placeholder',
  initialState,
  reducers: {
    increment: (state: placeholderState) => {
      state.value = state.value ? state.value + 1 : 1;
    },
    decrement: (state: placeholderState) => {
      state.value = state.value ? state.value - 1 : 0;
    },
  },
});

export const { increment, decrement } = placeholder.actions;
export default placeholder.reducer;
