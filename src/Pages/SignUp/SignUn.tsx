import { useLocation } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import FormSignUp from '../FormSignUp/FormSignUp';

export default function SignUp() {
  const location = useLocation();

  return (
    <div className='wrapper-global'>
      <SectionHeader title='Sign In' />
      <FormSignUp location={location.pathname} />
    </div>
  );
}
