import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import appReducer from '../appredux/rootReducer';
export type AppThunk = ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  Action<string>
>;
export type AppThunkReturn<ReturnType> = ThunkAction<
  Promise<ReturnType>,
  RootState,
  unknown,
  Action<string>
>;

export const store = configureStore({
  reducer: appReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
