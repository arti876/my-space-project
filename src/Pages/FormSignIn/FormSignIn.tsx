import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './FormSignIn.module.scss';
import { useGlobalContext } from '../../Provider/GlobalProvider';
import InputForm from '../../components/Inputs/InputForm/InputForm';
import ButtonForm from '../../components/Buttons/ButtonForm/ButtonForm';
import Form from '../../components/Form/Form';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

export default function FormSignIn() {
  const {
    FormData: { form, setForm },
    SuccessfulLogin: { setLogin },
  } = useGlobalContext();
  const emailRef = useRef();
  const passworfRef = useRef();
  const navigate = useNavigate();

  function handleClick() {
    const emailValid =
      form.emailValid === undefined || form.emailValid?.length === 0;
    const passwordValid =
      form.passwordValid === undefined || form.passwordValid?.length === 0;

    if (emailValid) {
      setForm({
        ...form,
        emailValid: true,
      });
      emailRef.current?.focus();
    } else if (passwordValid) {
      setForm({
        ...form,
        passwordValid: true,
      });
      passworfRef.current?.focus();
    } else {
      setLogin(true);
      navigate('/success');
    }
  }

  return (
    <>
      <SectionHeader title='Sign In' />
      <Form>
        <>
          <InputForm
            ref={emailRef}
            id='email'
            type='text'
            placeholder='Enter your mail'
          >
            Email
          </InputForm>
          <div>
            <InputForm
              ref={passworfRef}
              id='password'
              type='password'
              placeholder='Enter password'
            >
              Password
            </InputForm>
            <Link to='/' className={style['forgot-password']}>
              Forgot password?
            </Link>
          </div>
          <div className={style['container-btn-sign-in']}>
            <ButtonForm
              name='btn-sign-in'
              disabled={form.emailValid ? true : form.passwordValid}
              onClick={handleClick}
            >
              Sign In
            </ButtonForm>
            <div className={style['container-sing-up']}>
              <p>Dont have an account?</p>
              <Link to='/' className={style['btn-sign-up']}>
                Sign Up
              </Link>
            </div>
          </div>
        </>
      </Form>
    </>
  );
}
