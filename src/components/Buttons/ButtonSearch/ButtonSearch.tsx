import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './ButtonSearch.module.scss';
import Icons from '../../Icons/Icons';

export default function ButtonSearch() {
  const [hidenSearch, setHidenSearch] = useState(false);
  const refSearch = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  function closeSearch() {
    setHidenSearch(!hidenSearch);
  }

  function handleSubmit(e: { preventDefault: () => void; target: any }) {
    e.preventDefault();
    const form = e.target;
    if (!form.search) {
      setHidenSearch(!hidenSearch);
    } else {
      const query = form.search.value.toLowerCase();
      navigate('search-result', { state: query });
    }
  }

  return (
    <form autoComplete='off' onSubmit={handleSubmit} className={style.form}>
      {hidenSearch && (
        <label htmlFor='search' className={style.label}>
          <input
            ref={refSearch}
            id='search'
            name='search'
            className={style.input}
            type='text'
            placeholder='Enter a post title'
          />
          <button
            type='button'
            className={style.close}
            name='close'
            onClick={closeSearch}
          >
            х
          </button>
        </label>
      )}
      <button
        type='submit'
        className={`${style.btn} ${hidenSearch && style['btn-active']}`}
        name='btn-search'
      >
        <Icons className={style.ico} id='search' />
      </button>
    </form>
  );
}
