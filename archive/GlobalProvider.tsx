// import React, { useContext, useMemo, useState } from 'react';
// import { Theme } from '..';

// interface MainProviderProps {
//   children: JSX.Element;
// }

// interface IMainContext {
//   FormData: {
//     form: object;
//     setForm: React.Dispatch<React.SetStateAction<object>>;
//   };
//   ToggleTheme: {
//     theme: Theme;
//     setTeme: React.Dispatch<React.SetStateAction<Theme>>;
//   };
// }

// const GlobalContext = React.createContext<IMainContext | undefined>(undefined);

// export function useGlobalContext() {
//   const context = useContext(GlobalContext);
//   if (context === undefined) {
//     throw Error(
//       'useMainContext must be used inside of a MainProvider, otherwise it will not function correctly.',
//     );
//   }
//   return context;
// }

// export default function GlobalProvider({ children }: MainProviderProps) {
//   const [form, setForm] = useState({});
//   const [theme, setTeme] = useState(Theme.Light);

//   const contextData = useMemo(
//     () => ({
//       FormData: {
//         form,
//         setForm,
//       },
//       ToggleTheme: {
//         theme,
//         setTeme,
//       },
//     }),
//     [form, theme],
//   );

//   return (
//     <GlobalContext.Provider value={contextData}>
//       {children}
//     </GlobalContext.Provider>
//   );
// }
