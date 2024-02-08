import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ImageModal from '../../Modals/ImageModal/ImageModal';

function AppLayout() {
  return (
    <>
      <ImageModal />
      <Header />
      <main className='wrapper-global'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
