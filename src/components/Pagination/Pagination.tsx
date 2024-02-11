import { useEffect, useMemo } from 'react';
import style from './Pagination.module.scss';
import usePagination from '../../hooks/usePagination';
import { useAppSelector } from '../../store/store';
import { IPost } from '../..';

interface PaginationProps {
  pageQty: number;
  pageNum: number;
  setPosts: (posts: IPost[]) => void;
  favoritesPage: boolean;
}

export default function Pagination({
  pageQty,
  pageNum = 1,
  setPosts,
  favoritesPage = false,
}: PaginationProps) {
  const { posts } = useAppSelector((state) => state.posts);

  const countFavoritesPage = useMemo(() => {
    return favoritesPage
      ? posts.filter((post) => post.inFavorite === true).length
      : posts.length;
  }, [favoritesPage, posts]);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
    gaps,
  } = usePagination({
    contentPerPage: pageQty,
    count: countFavoritesPage,
    pageNum,
  });

  useEffect(() => {
    let postsSlice = [];
    if (favoritesPage) {
      postsSlice = posts
        .filter((post) => post.inFavorite === true)
        .slice(firstContentIndex, lastContentIndex);
    } else {
      postsSlice = posts.slice(firstContentIndex, lastContentIndex);
    }
    setPosts(postsSlice);
  }, [posts, page]);

  return (
    <div className={style.wrapper}>
      <button
        type='button'
        onClick={prevPage}
        className={`${style.page} ${page === 1 && style.disabled}`}
      >
        ⭅ Previous
      </button>
      <button
        type='button'
        onClick={() => setPage(1)}
        className={`${style.page} ${page === 1 && style.active}`}
      >
        1
      </button>
      {gaps.before ? '...' : null}
      {gaps.paginationGroup.map((el) => (
        <button
          type='button'
          onClick={() => setPage(el)}
          key={el}
          className={`${style.page} ${page === el ? style.active : ''}`}
        >
          {el}
        </button>
      ))}
      {gaps.after ? '...' : null}
      <button
        type='button'
        onClick={() => setPage(totalPages)}
        className={`${style.page} ${page === totalPages && style.active}`}
      >
        {totalPages}
      </button>
      <button
        type='button'
        onClick={nextPage}
        className={`${style.page} ${page === totalPages && style.disabled}`}
      >
        Next ⭆
      </button>
    </div>
  );
}
