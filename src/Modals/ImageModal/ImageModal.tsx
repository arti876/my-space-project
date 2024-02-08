import { useEffect } from 'react';
import { useClickAway } from '@uidotdev/usehooks';
import style from './ImageModal.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { toggleModal } from '../../store/modalSlise';

export default function ImageModal() {
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

  return (
    <div className={inActive ? style.modal : style.hide}>
      <div className={style.containerImage}>
        <img
          ref={refOutside}
          className={style.image}
          src={imageUrl}
          alt='img'
        />
      </div>
    </div>
  );
}
