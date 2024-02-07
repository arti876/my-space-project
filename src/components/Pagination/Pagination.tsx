import { useEffect } from 'react';
import style from './Pagination.module.scss';
import usePagination from '../../hooks/usePagination';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxTypes';
import { getPaginPosts } from '../../store/postSlice';

interface PaginationProps {
  pageQty: number;
}

export default function Pagination({ pageQty }: PaginationProps) {
  const { posts } = useAppSelector((state) => state.posts);
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
    contentPerPage: pageQty,
    count: posts.length,
    pageNum: 1,
  });

  useEffect(() => {
    dispatch(getPaginPosts({ firstContentIndex, lastContentIndex }));
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
