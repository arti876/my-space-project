import { Link } from 'react-router-dom';
import stylePosrcard from './Postcard.module.scss';
import { IPost, PostSize } from '../..';
import ButtonLike from '../Buttons/ButtonLike/ButtonLike';
import ButtonBookmark from '../Buttons/ButtonBookmark/ButtonBookmark';
import { useAppDispatch } from '../../store/store';
import { getImageUrl, toggleModal } from '../../store/modalSlise';

interface PostProps {
  post: IPost;
  size: PostSize;
}

export default function PostCard({ post, size }: PostProps) {
  const { id, title, date, description, image, inFavorite } = post;
  const dispatch = useAppDispatch();

  let postSize = null;

  if (size === PostSize.Large) {
    postSize = PostSize.Large;
  } else if (size === PostSize.Medium) {
    postSize = PostSize.Medium;
  } else if (size === PostSize.Small) {
    postSize = PostSize.Small;
  }

  function handleClick() {
    dispatch(toggleModal(true));
    dispatch(getImageUrl(image));
  }

  return (
    <div
      id={id}
      className={`${stylePosrcard['post-card']} ${stylePosrcard[`post-card--${postSize}`]}`}
    >
      <div className={stylePosrcard[`post-card-top--${postSize}`]}>
        <div
          className={`${stylePosrcard['post-content-text']} ${stylePosrcard[`post-content-text--${postSize}`]}`}
        >
          <p className={stylePosrcard['post-date']}>{date}</p>
          <Link
            to={`/posts/${id}`}
            className={stylePosrcard[`post-title--${postSize}`]}
          >
            {title}
          </Link>
          {postSize === PostSize.Large && (
            <p className={stylePosrcard['post-description']}>{description}</p>
          )}
        </div>
        <button
          type='button'
          onClick={handleClick}
          className={stylePosrcard[`post-img-container--${postSize}`]}
        >
          <img className={stylePosrcard['post-img']} src={image} alt='img' />
        </button>
      </div>
      <div className={stylePosrcard['post-card-bottom']}>
        <ButtonLike />
        <div className={stylePosrcard['post-card-bottom-right']}>
          <ButtonBookmark inFavorite={inFavorite} idPost={id} />
          <button type='button' name='btn'>
            ...
          </button>
        </div>
      </div>
    </div>
  );
}
