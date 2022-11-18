import {configureStore} from '@reduxjs/toolkit';
import favoriteReducer from './favoriteSlice';
import authReducer from './authSlice';
import userInfoReducer from './userInfoSlice';

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
    user: authReducer,
    userInfo: userInfoReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
