import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import usePagination from '../../hooks/usePagination';
import style from './PagePost.module.scss';
import ButtonLike from '../../components/Buttons/ButtonLike/ButtonLike';
import ButtonBookmark from '../../components/Buttons/ButtonBookmark/ButtonBookmark';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxTypes';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { getPaginPosts } from '../../store/postSlice';

export default function PagePost() {
  const { id } = useParams();
  const { status, error, posts, paginPosts } = useAppSelector(
    (state) => state.posts,
  );
  const dispatch = useAppDispatch();
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
    count: posts.length,
    pageNum: Number(id),
  });

  useEffect(() => {
    if (posts.length) {
      dispatch(getPaginPosts({ firstContentIndex, lastContentIndex }));
    }
  }, [posts, page]);

  return (
    <>
      <SectionHeader title='Post' />
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {paginPosts.length && (
        <div id={paginPosts[0].id} className={style.wrapper}>
          <div className={style['post-container']}>
            <div className={style.title}>{paginPosts[0].title}</div>
            <div className={style['img-container']}>
              <img
                className={style['post-img']}
                src={paginPosts[0].image}
                alt='img'
              />
            </div>
            <div className={style.description}>{paginPosts[0].description}</div>
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
