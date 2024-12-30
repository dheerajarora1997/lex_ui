import { combineReducers } from '@reduxjs/toolkit';

import placeholderReducer, {
  placeholderState,
} from '../module/placeholderSlice';

export interface RootState {
  placeholder: placeholderState;
}

const lexPortalReducer = combineReducers({
  placeholder: placeholderReducer,
});

export default lexPortalReducer;
