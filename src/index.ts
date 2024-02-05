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
