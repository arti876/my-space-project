import { Outlet } from 'react-router-dom';
import style from './Blog.module.scss';
import LinkTab from '../../components/CustomLink/LinkTab';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { RoutePath } from '../..';

export default function Blog() {
  return (
    <>
      <SectionHeader title='Blog' />
      <div className={style['nav-header']}>
        <LinkTab to={`/${RoutePath.BLOG_ALL}`} className={style.tab}>
          All
        </LinkTab>
        <LinkTab to={`/${RoutePath.BLOG_FAVORITES}`} className={style.tab}>
          My favorites
        </LinkTab>
        <LinkTab to={`/${RoutePath.BLOG_POPULAR}`} className={style.tab}>
          Popular
        </LinkTab>
      </div>
      <Outlet />
    </>
  );
}
