import { useParams } from 'react-router-dom';
import { useRef, useState } from 'react';
import style from './PagePost.module.scss';
import ButtonLike from '../../components/Buttons/ButtonLike/ButtonLike';
import ButtonBookmark from '../../components/Buttons/ButtonBookmark/ButtonBookmark';
import { useAppSelector } from '../../store/store';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Pagination from '../../components/Pagination/Pagination';

export default function PagePost() {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const { status, error } = useAppSelector((state) => state.posts);

  return (
    <>
      <SectionHeader title='Post' />
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.length && (
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
              <ButtonBookmark idPost='123' className={style.bookmark}>
                <span>Add to favorites</span>
              </ButtonBookmark>
            </div>
          </div>
        </div>
      )}
      <Pagination pageNum={Number(id)} pageQty={1} setPosts={setPosts} />
    </>
  );
}
