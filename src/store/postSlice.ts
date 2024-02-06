// @ts-nocheck
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import getRandomDay from '../utils/getRandomDay';
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
      // const urls = Object.values({
      //   posts: 'https://dummyjson.com/posts',
      //   imageAatronaut:
      //     'https://api.unsplash.com/search/photos?page=1&per_page=30&query=astronaut&client_id=za_zdSM8jklgxHd6iw-hJpsSeEzKHsfEE69XmtnaZFA',
      // });

      // const response = await axios.all(urls.map((url) => axios.get(url)));

      // const responsePosts = response[0].data.posts;
      // const responseImages = response[1].data.results;

      // const posts = responsePosts.map((post: IPost) => ({
      //   id: post.id,
      //   date: getRandomDay(new Date(2023, 0, 1), new Date()),
      //   description: post.body,
      //   title: post.title,
      //   inFavorite: false,
      // }));

      // const images = responseImages.map((image: IPost) => ({
      //   image: image.urls.regular,
      // }));

      // const apiPosts = posts.map((item: object, index: number) => ({
      //   ...item,
      //   ...images[index],
      // }));

      // return apiPosts;

      // const url = 'http://localhost:3000/posts';
      const url =
        'https://run.mocky.io/v3/fe0ed702-76ed-4210-8f59-8b1890ec57b3';
      const response = await axios.get(url);
      return response.data.posts;
    } catch (error) {
      const errorFetch = error as AxiosError;

      return rejectWithValue(errorFetch.message);
    }
  },
);

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
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

export default postSlice.reducer;
