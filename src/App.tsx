import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import GlobalProvider from './Provider/GlobalProvider';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Theme from './components/Theme/Theme';
import { fetchPosts } from './store/postSlice';

export default function App() {
  const dispatch = useDispatch();

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
