import { createTheme } from '@mui/material';

const theme = createTheme({
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
  components: {
    MuiInputBase: {
      defaultProps: {
        sx: {
          fontSize: '14px',
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        sx: {
          fontSize: '1.5rem',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        sx: {
          fontSize: '14px',
        },
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        sx: {
          top: '100%',
          position: 'absolute',
          fontSize: '12px',
        },
      },
    },
  },
});

export default theme;
