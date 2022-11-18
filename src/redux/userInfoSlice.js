import {createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    displayName: '' || null,
    email: '' || null,
    photoURL: '' || null,
  },
  reducers: {
    updateUserInfo: (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.emailVerified = action.payload.emailVerified;
      state.phoneNumber = action.payload.phoneNumber;
      state.photoURL = action.payload.photoURL;
    },
  },
});

export const {updateUserInfo} = userInfoSlice.actions;

export const selectUserInfo = state => state.userInfo;

export default userInfoSlice.reducer;
