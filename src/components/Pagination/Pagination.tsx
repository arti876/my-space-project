// @ts-nocheck
import { useEffect } from 'react';
import style from './Pagination.module.scss';
import usePagination from '../../hooks/usePagination';
import { useGlobalContext } from '../../Provider/GlobalProvider';
import { useAppSelector } from '../../hooks/useReduxTypes';

interface PaginationProps {
  pageQty: number;
}

export default function Pagination({ pageQty }: PaginationProps) {
  const { posts } = useAppSelector((state) => state.posts);
  const {
    PostsData: { setPosts },
  } = useGlobalContext();
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: pageQty,
    count: posts.length,
    pageNum: 1,
  });

  useEffect(() => {
    const postsSlice = posts.slice(firstContentIndex, lastContentIndex);
    setPosts(postsSlice);
  }, [posts, page]);

  return (
    <div className={style.wrapper}>
      <button type='button' onClick={prevPage} className={style.page}>
        ⭅ Previous
      </button>
      {[...Array(totalPages).keys()].map((el) => (
        <button
          type='button'
          onClick={() => setPage(el + 1)}
          key={el}
          className={`${style.page} ${page === el + 1 ? style.active : ''}`}
        >
          {el + 1}
        </button>
      ))}
      <button type='button' onClick={nextPage} className={style.page}>
        Next ⭆
      </button>
      {/* <div className={style.count}>
        {page}/{totalPages}
      </div> */}
    </div>
  );
}
