import { useLocation, Link } from 'react-router-dom';
import style from './SearchResult.module.scss';
import ButtonBookmark from '../../components/Buttons/ButtonBookmark/ButtonBookmark';
import { useAppSelector } from '../../store/store';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Like from '../../components/Like';

export default function SearchResult() {
  const { status, error, posts } = useAppSelector((state) => state.posts);
  const location = useLocation();

  return (
    <>
      <SectionHeader title='Search result' />
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.length &&
        location.state &&
        posts
          .filter(({ title }) => title.toLowerCase().includes(location.state))
          .map((post) => (
            <div key={post.id} id={post.id} className={style['post-card']}>
              <div className={style['post-card-top']}>
                <div className={style['post-content-text']}>
                  <p className={style['post-date']}>{post.date}</p>
                  <Link
                    to={`/posts/${post.id}`}
                    className={style['post-title']}
                  >
                    {post.title}
                  </Link>
                  <p className={style['post-description']}>
                    {post.description}
                  </p>
                </div>
                <div className={style['post-img-container']}>
                  <img
                    className={style['post-img']}
                    src={post.image}
                    alt='img'
                  />
                </div>
              </div>
              <div className={style['post-card-bottom']}>
                <div className={style['like-container']}>
                  <Like
                    postId={post.id}
                    type='like'
                    color='success'
                    currentCount={post.like}
                  />
                  <Like
                    postId={post.id}
                    type='dislike'
                    color='error'
                    currentCount={post.dislike}
                  />
                </div>
                <div className={style['post-card-bottom-right']}>
                  <ButtonBookmark
                    idPost={post.id}
                    inFavorite={post.inFavorite}
                  />
                  <button type='button' name='btn'>
                    ...
                  </button>
                </div>
              </div>
            </div>
          ))}
    </>
  );
}
