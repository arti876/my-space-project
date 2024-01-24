import { Link } from 'react-router-dom';
import style from './FormSuccess.module.scss';
import Form from '../../components/Form/Form';

export default function FormSuccess() {
  return (
    <Form>
      <>
        <div className={style['container-title']}>
          <p>Login successful.</p>
          <p>You can now log in to your personal account.</p>
        </div>
        <Link to='/blog/all' className={style.link} aria-disabled>
          Go to home
        </Link>
      </>
    </Form>
  );
}
