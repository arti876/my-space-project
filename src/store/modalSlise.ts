import { createSlice } from '@reduxjs/toolkit';

interface IModalState {
  inActive: boolean;
  imageUrl: string;
}

const initialState: IModalState = {
  inActive: false,
  imageUrl: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal(state, actions) {
      state.inActive = actions.payload;
    },
    getImageUrl(state, actions) {
      state.imageUrl = actions.payload;
    },
  },
});

export const { toggleModal, getImageUrl } = modalSlice.actions;

export default modalSlice.reducer;
