import { createSlice } from '@reduxjs/toolkit';

interface IUserState {
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  id: string;
  isAuth: boolean;
}

const initialState: IUserState = {
  firstName: '',
  lastName: '',
  email: '',
  token: '',
  id: '',
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    loginUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.isAuth = action.payload.isAuth;
    },
    removeUser: (state) => {
      state.isAuth = false;
    },
  },
});

export const { registerUser, loginUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
