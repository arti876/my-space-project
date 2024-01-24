// @ts-nocheck
import { LegacyRef, forwardRef } from 'react';
import style from './InputForm.module.scss';
import { useGlobalContext } from '../../../Provider/GlobalProvider';

interface InputFormProp {
  children: string | JSX.Element;
  id: string;
  type: string;
  placeholder: string;
}

export default forwardRef(function InputForm(
  { children, id, type, placeholder }: InputFormProp,
  ref: React.LegacyRef<HTMLInputElement>,
) {
  const { FormData } = useGlobalContext();
  const { form, setForm } = FormData;

  function handleInput(value: LegacyRef<HTMLInputElement>) {
    const { current } = value;
    setForm({
      ...form,
      [current?.id]: current?.value,
      [`${[current?.id]}Valid`]: current?.value.length === 0,
    });
  }

  return (
    <label htmlFor={id} className={style['label-container']}>
      <p className={style.label}>
        {children}
        <span className={style.star}>*</span>
      </p>
      <input
        ref={ref}
        id={id}
        className={`${style.input} ${form[`${id}Valid`] && style.error}`}
        type={type}
        placeholder={placeholder}
        onChange={() => handleInput(ref)}
      />
    </label>
  );
});
