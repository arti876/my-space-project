import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import postReducer from './postSlice';
import authReducer from './authSlise';
import modalReducer from './modalSlise';

const store = configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer,
    modal: modalReducer,
  },
});

export default store;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
