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
    document.body.style.overflow = 'hidden';
  }, []);

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
