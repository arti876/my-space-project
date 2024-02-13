import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IPost } from '..';

interface IPostsState {
  posts: IPost[];
  status: string | null;
  error: unknown;
}

const initialState: IPostsState = {
  posts: [],
  status: null,
  error: null,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async function fetchPostsData(_, { rejectWithValue }) {
    try {
      const url =
        'https://run.mocky.io/v3/a1613be0-22ff-47f3-b427-25e128c17896';
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      const errorFetch = error as AxiosError;

      return rejectWithValue(errorFetch.message);
    }
  },
);

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    toggleInFavorite: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload
          ? { ...post, inFavorite: !post.inFavorite }
          : post,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    });
  },
});

export const { toggleInFavorite } = postSlice.actions;

export default postSlice.reducer;
