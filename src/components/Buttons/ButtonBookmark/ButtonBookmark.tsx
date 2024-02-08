import { useState } from 'react';
import style from './ButtonBookmark.module.scss';
import Icons from '../../Icons/Icons';

interface ButtonBookmarkProps {
  children: JSX.Element;
  className: string;
  idPost: string | number;
}

export default function ButtonBookmark({
  children,
  className,
  idPost,
}: ButtonBookmarkProps) {
  const [bookmark, setBookmark] = useState(false);

  function handleClick() {
    setBookmark(!bookmark);
    console.log(idPost);
  }

  return (
    <button
      className={className}
      type='button'
      name='bookmark'
      onClick={handleClick}
    >
      <Icons
        className={`${style['ico-bookmark']} ${bookmark && style['ico-bookmark-active']}`}
        id='bookmark'
      />
      {children}
    </button>
  );
}
