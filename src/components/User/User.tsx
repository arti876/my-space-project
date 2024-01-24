import style from './User.module.scss';

export default function User() {
  return (
    <div className={style.wrapper}>
      <div className={style.initials}>TS</div>
      <div className={style.fullname}>Tom Shepard</div>
    </div>
  );
}
