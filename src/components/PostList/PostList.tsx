import postListStyle from './PostList.module.scss';
import PostCard from '../PostCard/Postcard';
import { PostSize } from '../..';
import { useGlobalContext } from '../../Provider/GlobalProvider';
import { useAppSelector } from '../../hooks/useReduxTypes';

export default function PostList() {
  const { status, error } = useAppSelector((state) => state.posts);
  const {
    PostsData: { posts },
  } = useGlobalContext();
  const postLarge = posts.slice(0, 1);
  const postMedium = posts.slice(1, 5);
  const postSmall = posts.slice(5, 11);

  return (
    <>
      {status && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className={postListStyle.postList}>
        <div className={postListStyle.LargeMedium}>
          <div className={postListStyle.postsLarge}>
            {posts.length &&
              postLarge.map((post) => (
                <PostCard post={post} size={PostSize.Large} key={post.id} />
              ))}
          </div>
          <div className={postListStyle.postsMedium}>
            {posts.length &&
              postMedium.map((post) => (
                <PostCard post={post} size={PostSize.Medium} key={post.id} />
              ))}
          </div>
        </div>
        <div className={postListStyle.postsSmall}>
          {posts.length &&
            postSmall.map((post) => (
              <PostCard post={post} size={PostSize.Small} key={post.id} />
            ))}
        </div>
      </div>
    </>
  );
}
