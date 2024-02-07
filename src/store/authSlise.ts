import { createSlice } from '@reduxjs/toolkit';

interface IAuthState {
  authorized: boolean;
}

const initialState: IAuthState = {
  authorized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleAuth(state) {
      state.authorized = !state.authorized;
    },
  },
});

export const { toggleAuth } = authSlice.actions;

export default authSlice.reducer;
