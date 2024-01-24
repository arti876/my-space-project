import style from './Form.module.scss';

interface FormProps {
  children: JSX.Element;
}

export default function Form({ children }: FormProps) {
  return <form className={style.form}>{children}</form>;
}
