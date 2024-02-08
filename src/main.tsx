// import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store/store';
import Theme from './components/Theme/Theme';
import ThemeProvider from './Provider/ThemeProvider';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider>
      <BrowserRouter>
        <Theme>
          <App />
        </Theme>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  // </React.StrictMode>,
);
