/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async function fetchPostsData(_, { rejectWithValue }) {
    try {
      const urls = Object.values({
        posts: 'https://dummyjson.com/posts',
        imageAatronaut:
          'https://api.unsplash.com/search/photos?page=1&per_page=30&query=astronaut&client_id=za_zdSM8jklgxHd6iw-hJpsSeEzKHsfEE69XmtnaZFA',
      });

      const response = await axios.all(urls.map((url) => axios.get(url)));

      const responsePosts = response[0].data.posts;
      const responseImages = response[1].data.results;

      const posts = responsePosts.map((post: IPost) => ({
        id: post.id,
        date: getRandomDay(new Date(2023, 0, 1), new Date()),
        description: post.body,
        title: post.title,
        inFavorite: false,
      }));

      const images = responseImages.map((image: IPost) => ({
        image: image.urls.regular,
      }));

      const apiPosts = posts.map((item: object, index: number) => ({
        ...item,
        ...images[index],
      }));

      return apiPosts;
    } catch (error) {
      const errorFetch = error as AxiosError;

      return rejectWithValue(errorFetch.message);
    }
  },
);

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: null,
    error: null,
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;

// const { status, error } = useSelector((state) => state.todos);
