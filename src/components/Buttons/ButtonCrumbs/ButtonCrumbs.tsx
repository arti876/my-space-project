import style from './ButtonCrumbs.module.scss';

interface ButtonBlogProps {
  children: string;
  activePage?: boolean;
}

export default function ButtonCrumbs({
  children,
  activePage,
}: ButtonBlogProps) {
  return (
    <button
      type='button'
      className={`${activePage && style.active} ${style.hover}`}
    >
      {children}
    </button>
  );
}

ButtonCrumbs.defaultProps = {
  activePage: null,
};
