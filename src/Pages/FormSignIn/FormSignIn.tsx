import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './FormSignIn.module.scss';
import InputForm from '../../components/Inputs/InputForm/InputForm';
import ButtonForm from '../../components/Buttons/ButtonForm/ButtonForm';
import Form from '../../components/Form/Form';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useAppDispatch } from '../../store/store';
import { toggleAuth } from '../../store/authSlise';
import { RoutePath } from '../..';

export default function FormSignIn() {
  const [form, setForm] = useState({});
  const dispatch = useAppDispatch();
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
      dispatch(toggleAuth());
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
            form={form}
            setForm={setForm}
          >
            Email
          </InputForm>
          <div>
            <InputForm
              ref={passworfRef}
              id='password'
              type='password'
              placeholder='Enter password'
              form={form}
              setForm={setForm}
            >
              Password
            </InputForm>
            <Link to={RoutePath.ROOT} className={style['forgot-password']}>
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
              <Link to={RoutePath.ROOT} className={style['btn-sign-up']}>
                Sign Up
              </Link>
            </div>
          </div>
        </>
      </Form>
    </>
  );
}
