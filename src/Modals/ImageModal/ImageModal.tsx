import { useEffect } from 'react';
import { useClickAway } from '@uidotdev/usehooks';
import style from './ImageModal.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { getImageUrl, toggleModal } from '../../store/modalSlise';

export default function ImageModal() {
  const { posts } = useAppSelector((state) => state.posts);
  const { inActive, imageUrl } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const refOutside = useClickAway(() => {
    dispatch(toggleModal(false));
  });

  useEffect(() => {
    if (inActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.removeAttribute('style');
    }
  }, [inActive]);

  function nextImage() {
    const idImage = posts.find((post) => post.image === imageUrl).id + 1;
    if (Number(idImage) <= posts.length) {
      const image = posts.find((post) => post.id === idImage)?.image;
      dispatch(getImageUrl(image));
    }
  }

  function previousImage() {
    const idImage = posts.find((post) => post.image === imageUrl).id - 1;
    if (Number(idImage) >= 1) {
      const image = posts.find((post) => post.id === idImage)?.image;
      dispatch(getImageUrl(image));
    }
  }

  return (
    <div className={inActive ? style.modal : style.hide}>
      <div ref={refOutside} className={style.containerImage}>
        <button
          type='button'
          onClick={previousImage}
          className={style.btnLeft}
        />
        <img className={style.image} src={imageUrl} alt='img' />
        <button type='button' onClick={nextImage} className={style.btnRight} />
      </div>
    </div>
  );
}
