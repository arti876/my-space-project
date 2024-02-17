import { createSlice } from '@reduxjs/toolkit';

interface IUserState {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  token: string | null;
  id: string | null;
}

const initialState: IUserState = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: (state) => {
      state.firstName = null;
      state.lastName = null;
      state.email = null;
      state.password = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
