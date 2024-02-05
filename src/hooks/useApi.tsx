// @ts-nocheck
import { useEffect, useState, useCallback } from 'react';
import axios, { AxiosError } from 'axios';
import getRandomDay from '../utils/getRandomDay';
import { IPost } from '..';

export default function useApi() {
  const [dataApi, setDataApi] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const urls = Object.values({
    posts: 'https://dummyjson.com/posts',
    imageAatronaut:
      'https://api.unsplash.com/search/photos?page=1&per_page=30&query=astronaut&client_id=za_zdSM8jklgxHd6iw-hJpsSeEzKHsfEE69XmtnaZFA',
  });

  const fetchDataApi = useCallback(async () => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.all(urls.map((url) => axios.get(url)));

      // custom api post creation--------------------------------------
      const dataApiPosts = response[0].data.posts;
      const dataApiImages = response[1].data.results;

      const posts = dataApiPosts.map((post: IPost) => ({
        id: post.id,
        date: getRandomDay(new Date(2023, 0, 1), new Date()),
        description: post.body,
        title: post.title,
        inFavorite: false,
      }));

      const images = dataApiImages.map((image: IPost) => ({
        image: image.urls.regular,
      }));

      const postData = posts.map((item: object, index: number) => ({
        ...item,
        ...images[index],
      }));
      // custom api post creation--------------------------------------

      setDataApi(postData);

      setLoading(false);
    } catch (e: unknown) {
      const errorFetch = e as AxiosError;
      setLoading(false);
      setError(errorFetch.message);
    }
  }, []);

  useEffect(() => {
    fetchDataApi();
  }, [fetchDataApi]);

  return { loading, error, dataApi };
}
