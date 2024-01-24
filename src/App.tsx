import GlobalProvider from './Provider/GlobalProvider';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Theme from './components/Theme/Theme';

export default function App() {
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
