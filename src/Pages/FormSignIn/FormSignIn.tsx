import { useLocation } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import FormSignUp from '../FormSignUp/FormSignUp';

export default function FormSignIn() {
  const location = useLocation();

  return (
    <div className='wrapper-global'>
      <SectionHeader title='Sign In' />
      <FormSignUp location={location.pathname} />
    </div>
  );
}
