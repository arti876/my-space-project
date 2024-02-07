import { useLocation } from 'react-router-dom';
import postListStyle from './PostList.module.scss';
import PostCard from '../PostCard/Postcard';
import { PostSize } from '../..';
import { useAppSelector } from '../../hooks/useReduxTypes';
import SectionHeader from '../SectionHeader/SectionHeader';
import Pagination from '../Pagination/Pagination';

export default function PostList() {
  const { status, error, paginPosts } = useAppSelector((state) => state.posts);
  const { pathname } = useLocation();
  const postLarge = paginPosts.slice(0, 1);
  const postMedium = paginPosts.slice(1, 5);
  const postSmall = paginPosts.slice(5, 11);

  return (
    <>
      {pathname === '/posts' && <SectionHeader title='Posts' />}
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className={postListStyle.postList}>
        <div className={postListStyle.LargeMedium}>
          <div className={postListStyle.postsLarge}>
            {paginPosts.length &&
              postLarge.map((post) => (
                <PostCard post={post} size={PostSize.Large} key={post.id} />
              ))}
          </div>
          <div className={postListStyle.postsMedium}>
            {paginPosts.length &&
              postMedium.map((post) => (
                <PostCard post={post} size={PostSize.Medium} key={post.id} />
              ))}
          </div>
        </div>
        <div className={postListStyle.postsSmall}>
          {paginPosts.length &&
            postSmall.map((post) => (
              <PostCard post={post} size={PostSize.Small} key={post.id} />
            ))}
        </div>
      </div>
      <Pagination pageQty={11} />
    </>
  );
}
