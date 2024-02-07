// import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store/store';
import Theme from './components/Theme/Theme';
import GlobalProvider from './Provider/GlobalProvider';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <GlobalProvider>
      <BrowserRouter>
        <Theme>
          <App />
        </Theme>
      </BrowserRouter>
    </GlobalProvider>
  </Provider>,
  // </React.StrictMode>,
);
