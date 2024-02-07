import { Outlet } from 'react-router-dom';
import style from './Blog.module.scss';
import LinkTab from '../../components/CustomLink/LinkTab';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

export default function Blog() {
  return (
    <>
      <SectionHeader title='Blog' />
      <div className={style['nav-header']}>
        <LinkTab to='/blog/all' className={style.tab}>
          All
        </LinkTab>
        <LinkTab to='/blog/favorites' className={style.tab}>
          My favorites
        </LinkTab>
        <LinkTab to='/blog/popular' className={style.tab}>
          Popular
        </LinkTab>
      </div>
      <Outlet />
    </>
  );
}
