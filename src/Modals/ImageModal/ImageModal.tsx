import { useEffect, useRef } from 'react';
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
      <div ref={refOutside} className={style.containerImage}>
        <button type='button' onClick={() => {}} className={style.btnLeft} />
        <img className={style.image} src={imageUrl} alt='img' />
        <button type='button' onClick={() => {}} className={style.btnRight} />
      </div>
    </div>
  );
}
