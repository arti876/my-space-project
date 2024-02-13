export enum RoutePath {
  ROOT = '/',
  SIGN_IN = 'sign-in',
  SUCCESS = 'success',
  BLOG = 'blog',
  ALL = 'all',
  FAVORITES = 'favorites',
  POPULAR = 'popular',
  BLOG_ALL = 'blog/all',
  BLOG_FAVORITES = 'blog/favorites',
  BLOG_POPULAR = 'blog/popular',
  POSTS = 'posts',
  POSTS_ID = '/posts/:idPost',
  SEARCH_RESULT = 'search-result',
  ADVANCED_LEVEL = 'advanced-level',
  ADD_POST = 'add-post',
  PROFILE = 'profile',
  NOT_FOUND = '*',
}

export enum PostSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export interface IPost {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  body: string;
  urls: {
    regular: string;
  };
  small: string;
  inFavorite: boolean;
}
