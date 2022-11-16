import {configureStore} from '@reduxjs/toolkit';
import favoriteReducer from './favoriteSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
    user: userReducer,
  },
});
