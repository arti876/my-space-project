import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {
  firstNameValidation,
  lastNameValidation,
  emailValidation,
  passwordValidation,
} from './validation';
import { IformData } from '.';
import styleMui from './style';
import ControllerTextField from './ControllerTextField';

export default function FormSignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

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

  const onSubmit: SubmitHandler<IformData> = (formData) => {
    console.log(formData);
    reset();
    // navigate('/success');
  };

  return (
    <div className='wrapper-global'>
      <form style={styleMui.form} onSubmit={handleSubmit(onSubmit)}>
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
        <ControllerTextField
          control={control}
          name='email'
          rules={emailValidation}
          label='Email'
          helperText={errors?.email?.message}
          error={!!errors?.email}
        />
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
        <Button
          type='submit'
          variant='contained'
          size='large'
          disabled={!isValid}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}
