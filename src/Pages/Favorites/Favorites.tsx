import { useState } from 'react';
import style from './Favorites.module.scss';
import PostCard from '../../components/PostCard/Postcard';
import { PostSize } from '../..';
import { useAppSelector } from '../../store/store';
import Pagination from '../../components/Pagination/Pagination';

export default function Favorites() {
  const { posts: postsData } = useAppSelector((state) => state.posts);
  const [posts, setPosts] = useState([]);

  if (postsData.filter((post) => post.inFavorite === true).length === 0)
    return null;

  return (
    <>
      {posts.length &&
        posts.map(
          (post) =>
            post.inFavorite === true && (
              <div className={style.container}>
                <PostCard post={post} size={PostSize.Large} key={post.id} />
              </div>
            ),
        )}
      <Pagination favoritesPage pageNum={1} pageQty={5} setPosts={setPosts} />
    </>
  );
}
