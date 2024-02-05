import style from './TitlePage.module.scss';

export default function TitlePage() {
  return (
    <div className={style.wrapper}>
      <div className={style.img} />
      <div className={style.title}>Astronauts</div>
    </div>
  );
}
