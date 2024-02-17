// import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import App from './App';
import store from './store/store';
import Theme from './components/Theme/Theme';
import MyThemeProvider from './Provider/ThemeProvider';
import './index.scss';
import ThemeMui from './style/ThemeMui';
import './firebase';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <MyThemeProvider>
      <BrowserRouter>
        <Theme>
          <ThemeProvider theme={ThemeMui}>
            <App />
          </ThemeProvider>
        </Theme>
      </BrowserRouter>
    </MyThemeProvider>
  </Provider>,
  // </React.StrictMode>,
);
