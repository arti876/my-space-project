// @ts-nocheck
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import usePagination from '../../hooks/usePagination';
import style from './PagePost.module.scss';
import ButtonLike from '../../components/Buttons/ButtonLike/ButtonLike';
import ButtonBookmark from '../../components/Buttons/ButtonBookmark/ButtonBookmark';
import { useAppSelector } from '../../hooks/useReduxTypes';

export default function PagePost() {
  const { id } = useParams();
  const {
    status,
    error,
    posts: dataApi,
  } = useAppSelector((state) => state.posts);
  const [posts, setPosts] = useState();
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 1,
    count: dataApi.length,
    pageNum: Number(id),
  });

  useEffect(() => {
    if (dataApi.length) {
      const newPosts = dataApi.slice(firstContentIndex, lastContentIndex);
      setPosts(newPosts);
    }
  }, [dataApi, page]);

  return (
    <>
      {status && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts && (
        <div id={posts[0].id} className={style.wrapper}>
          <div className={style['post-container']}>
            <div className={style.title}>{posts[0].title}</div>
            <div className={style['img-container']}>
              <img
                className={style['post-img']}
                src={posts[0].image}
                alt='img'
              />
            </div>
            <div className={style.description}>{posts[0].description}</div>
            <div className={style['post-footer-btn']}>
              <ButtonLike className={style['btn-like-background']} />
              <ButtonBookmark className={style.bookmark}>
                <span>Add to favorites</span>
              </ButtonBookmark>
            </div>
          </div>
          <div className={style.wrapperPag}>
            <button type='button' onClick={prevPage} className={style.pagePag}>
              ⭅ Previous
            </button>
            {[...Array(totalPages).keys()].map((el) => (
              <button
                type='button'
                onClick={() => setPage(el + 1)}
                key={el}
                className={`${style.pagePag} ${page === el + 1 ? style.activePag : ''}`}
              >
                {el + 1}
              </button>
            ))}
            <button type='button' onClick={nextPage} className={style.pagePag}>
              Next ⭆
            </button>
            {/* <div className={style.count}>
        {page}/{totalPages}
      </div> */}
          </div>
        </div>
      )}
    </>
  );
}
