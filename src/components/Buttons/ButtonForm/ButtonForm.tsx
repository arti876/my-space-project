import style from './ButtonForm.module.scss';

interface ButtonFormProp {
  children: string | JSX.Element;
  className?: string;
  name: string;
  disabled: boolean;
  onClick: () => void;
}

export default function ButtonForm({
  children,
  className,
  name,
  disabled,
  onClick,
}: ButtonFormProp) {
  return (
    <button
      className={className || style.btn}
      type='button'
      name={name}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

ButtonForm.defaultProps = {
  className: '',
};
