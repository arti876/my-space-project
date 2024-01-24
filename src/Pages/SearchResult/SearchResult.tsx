import { useLocation, Link } from 'react-router-dom';
import style from './SearchResult.module.scss';
import useApi from '../../hooks/useApi';
import ButtonLike from '../../components/Buttons/ButtonLike/ButtonLike';
import ButtonBookmark from '../../components/Buttons/ButtonBookmark/ButtonBookmark';

export default function SearchResult() {
  const { loading, error, dataApi } = useApi();
  const location = useLocation();

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {dataApi.length &&
        location.state &&
        dataApi
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
                <ButtonLike />
                <div className={style['post-card-bottom-right']}>
                  <ButtonBookmark />
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
