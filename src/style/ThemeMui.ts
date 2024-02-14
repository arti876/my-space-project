import { createTheme } from '@mui/material';

const theme = createTheme({
  // typography: {
  //   fontSize: 20,
  // },
  palette: {
    primary: {
      main: '#2231aa',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      contrastText: '#47008F',
    },
  },
});

export default theme;
