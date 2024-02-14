import { useParams } from 'react-router-dom';
import { useState } from 'react';
import style from './PagePost.module.scss';
import ButtonLike from '../../components/Buttons/ButtonLike/ButtonLike';
import ButtonBookmark from '../../components/Buttons/ButtonBookmark/ButtonBookmark';
import { useAppSelector } from '../../store/store';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Pagination from '../../components/Pagination/Pagination';
import Like from '../../components/Like';

export default function PagePost() {
  const [posts, setPosts] = useState([]);
  const { idPost } = useParams();
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
              <div className={style['like-container']}>
                <Like
                  postId={posts[0].id}
                  type='like'
                  color='success'
                  currentCount={posts[0].like}
                />
                <Like
                  postId={posts[0].id}
                  type='dislike'
                  color='error'
                  currentCount={posts[0].dislike}
                />
              </div>
              <ButtonBookmark
                idPost={idPost}
                className={style.bookmark}
                inFavorite={posts[0].inFavorite}
              >
                <span>Add to favorites</span>
              </ButtonBookmark>
            </div>
          </div>
        </div>
      )}

      <Pagination
        pageNum={Number(idPost)}
        pageQty={1}
        setPosts={setPosts}
        pageName='posts'
      />
    </>
  );
}
