import React, { useContext, useMemo, useState } from 'react';
import { Theme } from '..';

interface ThemeProviderProps {
  children: JSX.Element;
}

interface IThemeContext {
  theme: Theme;
  setTeme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = React.createContext<IThemeContext | undefined>(undefined);

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw Error(
      'useMainContext must be used inside of a MainProvider, otherwise it will not function correctly.',
    );
  }
  return context;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTeme] = useState(Theme.Light);

  const contextData = useMemo(
    () => ({
      theme,
      setTeme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={contextData}>
      {children}
    </ThemeContext.Provider>
  );
}
