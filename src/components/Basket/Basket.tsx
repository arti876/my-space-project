import style from './Basket.module.scss';

interface BasketProps {
  children: number;
  onClick: (prev: any) => void;
}

export default function Basket({ children, onClick }: BasketProps) {
  function basketAdd() {
    onClick((prev: number) => prev + 1);
  }

  function basketSubtract() {
    if (children === 0) {
      return;
    }
    onClick((prev: number) => prev - 1);
  }

  return (
    <>
      <button
        type='button'
        className={style['basket-container']}
        onClick={basketAdd}
      >
        {children > 0 && (
          <span className={style['basket-count']}>{children}</span>
        )}
      </button>
      <div className={style['basket-btn-container']}>
        <button
          type='button'
          onClick={basketAdd}
          className={style['basket-btn']}
        >
          basket +1
        </button>
        <button
          type='button'
          onClick={basketSubtract}
          className={style['basket-btn']}
        >
          basket -1
        </button>
      </div>
    </>
  );
}
