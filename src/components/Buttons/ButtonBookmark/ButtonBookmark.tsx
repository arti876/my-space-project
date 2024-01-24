import { useState } from 'react';
import style from './ButtonBookmark.module.scss';
import Icons from '../../Icons/Icons';

interface ButtonBookmarkProps {
  children?: JSX.Element;
  className?: string;
}

export default function ButtonBookmark({
  children,
  className,
}: ButtonBookmarkProps) {
  const [bookmark, setBookmark] = useState(false);

  return (
    <button
      className={className}
      type='button'
      name='bookmark'
      onClick={() => setBookmark(!bookmark)}
    >
      <Icons
        className={`${style['ico-bookmark']} ${bookmark && style['ico-bookmark-active']}`}
        id='bookmark'
      />
      {children}
    </button>
  );
}

ButtonBookmark.defaultProps = {
  children: null,
  className: null,
};
