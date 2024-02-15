import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, IconButton, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface IStyleMui {
  form: object;
  Visibility: object;
}

interface IformData {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const styleMui: IStyleMui = {
  form: {
    maxWidth: '350px',
    display: 'flex',
    flexDirection: 'column',
    gap: '35px',
  },
  Visibility: {
    fontSize: '24px',
  },
};

export default function Testing() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (formData: IformData) => {
    console.log(formData);
    reset();
  };

  return (
    <div className='wrapper-global'>
      <form style={styleMui.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={errors.firstName && true}
          type='text'
          id='first-name'
          label='First Name'
          variant='outlined'
          helperText={errors?.firstName?.message}
          {...register('firstName', {
            required: 'Required field',
            minLength: { value: 2, message: 'Minimum 2 characters' },
          })}
        />
        <TextField
          error={errors.lastName && true}
          type='text'
          id='last-name'
          label='Last Name'
          variant='outlined'
          helperText={errors?.lastName?.message}
          {...register('lastName', {
            required: 'Required field',
            minLength: { value: 2, message: 'Minimum 2 characters' },
          })}
        />
        <TextField
          error={errors.email && true}
          type='text'
          id='email'
          label='Email'
          variant='outlined'
          helperText={errors?.email?.message}
          {...register('email', {
            required: 'Required field',
            pattern: {
              value: /^[A-Za-z0-9+_.-]+@(.+)$/i,
              message: 'Enter the correct name',
            },
          })}
        />
        <TextField
          error={errors.password && true}
          type={showPassword ? 'text' : 'password'}
          id='password'
          label='Password'
          variant='outlined'
          helperText={errors?.password?.message}
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
          {...register('password', {
            required: 'Required field',
            minLength: { value: 5, message: 'Minimum 5 characters' },
          })}
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
