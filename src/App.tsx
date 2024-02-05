import { useEffect } from 'react';
import GlobalProvider from './Provider/GlobalProvider';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Theme from './components/Theme/Theme';
import { fetchPosts } from './store/postSlice';
import { useAppDispatch } from './hooks/useReduxTypes';

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <GlobalProvider>
      <Theme>
        <>
          <Header />
          <div className='wrapper-global'>
            <Main />
            <Footer />
          </div>
        </>
      </Theme>
    </GlobalProvider>
  );
}
