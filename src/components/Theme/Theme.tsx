import { useThemeContext } from '../../Provider/ThemeProvider';

interface BodyProps {
  children: JSX.Element;
}

export default function Theme({ children }: BodyProps) {
  const { theme } = useThemeContext();

  return <div className={theme}>{children}</div>;
}
