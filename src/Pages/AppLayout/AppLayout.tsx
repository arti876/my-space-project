import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function AppLayout() {
  return (
    <>
      <Header />
      <main className='wrapper-global'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
