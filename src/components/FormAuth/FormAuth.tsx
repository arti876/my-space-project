import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {
  firstNameValidation,
  lastNameValidation,
  emailValidation,
  passwordValidation,
} from './validation';
import { IformData } from '.';
import styleMui from './style';
import ControllerTextField from './ControllerTextField';
import { RoutePath } from '../..';

interface FormAuthProps {
  location: string;
  handleClick: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) => void;
}

export default function FormAuth({ location, handleClick }: FormAuthProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IformData>({
    mode: 'onBlur',
    defaultValues: { firstName: '', lastName: '', email: '', password: '' },
  });

  const onSubmit: SubmitHandler<IformData> = ({
    firstName,
    lastName,
    email,
    password,
  }) => {
    handleClick(email, password, firstName, lastName);
    reset();
  };

  return (
    <form className='style-mui' onSubmit={handleSubmit(onSubmit)}>
      {location === RoutePath.SIGN_UP && (
        <>
          <ControllerTextField
            control={control}
            name='firstName'
            rules={firstNameValidation}
            type='text'
            label='First Name'
            helperText={errors?.firstName?.message}
            error={!!errors?.firstName}
          />
          <ControllerTextField
            control={control}
            name='lastName'
            rules={lastNameValidation}
            label='Last Name'
            helperText={errors?.lastName?.message}
            error={!!errors?.lastName}
          />
        </>
      )}
      <ControllerTextField
        control={control}
        name='email'
        rules={emailValidation}
        label='Email'
        helperText={errors?.email?.message}
        error={!!errors?.email}
      />
      <div className='container-password'>
        <ControllerTextField
          control={control}
          name='password'
          rules={passwordValidation}
          type={showPassword ? 'text' : 'password'}
          label='Password'
          helperText={errors?.password?.message}
          error={!!errors?.password}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {showPassword ? (
                  <VisibilityOff sx={styleMui.Visibility} />
                ) : (
                  <Visibility sx={styleMui.Visibility} />
                )}
              </IconButton>
            ),
          }}
        />
        {location === RoutePath.SIGN_IN && (
          <Link to={RoutePath.NOT_FOUND} className='link-forgot-password'>
            Forgot password?
          </Link>
        )}
      </div>
      <div>
        <Button
          type='submit'
          variant='contained'
          size='large'
          disabled={!isValid}
        >
          {location === RoutePath.SIGN_IN ? 'Sign In' : 'Sign Up'}
        </Button>
        {location === RoutePath.SIGN_IN && (
          <div className='container-link-sing-up'>
            <p>Dont have an account?</p>
            <Link to={RoutePath.SIGN_UP} className='link-sign-up'>
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </form>
  );
}
