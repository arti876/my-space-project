import { useEffect, useRef, useState } from 'react';
import style from './ButtonLike.module.scss';
import Icons from '../../Icons/Icons';

interface ButtonLikeProps {
  className?: string;
}

export default function ButtonLike({ className }: ButtonLikeProps) {
  const [likeStatus, setLikeStatus] = useState<string>('');
  const [likeCount, setLikeCount] = useState<number | null>();
  const prevValue = useRef('');

  useEffect(() => {
    prevValue.current = likeStatus;
  }, [likeStatus]);

  function handleLikeDislike(type: string) {
    if (
      (type === 'like' && prevValue.current !== 'like') ||
      (type === 'dislike' && prevValue.current !== 'dislike')
    ) {
      setLikeStatus(type);
      setLikeCount(1);
    } else {
      setLikeStatus('');
      setLikeCount(null);
    }
  }

  return (
    <div className={style.container}>
      <button
        className={className}
        type='button'
        name='like'
        onClick={() => handleLikeDislike('like')}
      >
        <Icons
          className={`${style['ico-like-default']} ${likeStatus === 'like' && style['ico-like']}`}
          id='like'
        />
        <span className={style.count}>
          {likeStatus === 'like' && likeCount}
        </span>
      </button>
      <button
        className={className}
        type='button'
        name='dislike'
        onClick={() => handleLikeDislike('dislike')}
      >
        <Icons
          className={`${style['ico-dislike-default']} ${likeStatus === 'dislike' && style['ico-dislike']}`}
          id='like'
        />
        <span className={style.count}>
          {likeStatus === 'dislike' && likeCount}
        </span>
      </button>
    </div>
  );
}

ButtonLike.defaultProps = {
  className: null,
};
