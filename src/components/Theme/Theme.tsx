import { useGlobalContext } from '../../Provider/GlobalProvider';

interface BodyProps {
  children: JSX.Element;
}

export default function Theme({ children }: BodyProps) {
  const {
    ToggleTheme: { theme },
  } = useGlobalContext();

  return <div className={theme}>{children}</div>;
}
