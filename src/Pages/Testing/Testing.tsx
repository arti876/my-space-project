import React, { useEffect, useState } from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { Button, IconButton, TextField } from '@mui/material';
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

export default function Testing() {
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
    // register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    resetField,
  } = useForm<IformData>({
    mode: 'onBlur',
    // defaultValues: { firstName: '123' },
  });

  const onSubmit: SubmitHandler<IformData> = (formData) => {
    console.log(formData);
    reset();
    // navigate('/success');
  };

  return (
    <div className='wrapper-global'>
      <form style={styleMui.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name='firstName'
          rules={firstNameValidation}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              type='text'
              label='First Name'
              onChange={(e) => onChange(e)}
              onBlur={onBlur}
              value={value}
              helperText={errors?.firstName?.message}
              error={!!errors?.firstName}
            />
          )}
        />
        <Controller
          control={control}
          name='lastName'
          rules={lastNameValidation}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              type='text'
              label='Last Name'
              onChange={(e) => onChange(e)}
              onBlur={onBlur}
              value={value}
              helperText={errors?.lastName?.message}
              error={!!errors?.lastName}
            />
          )}
        />
        <Controller
          control={control}
          name='email'
          rules={emailValidation}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              type='text'
              label='Email'
              onChange={(e) => onChange(e)}
              onBlur={onBlur}
              value={value}
              helperText={errors?.email?.message}
              error={!!errors?.email}
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          rules={passwordValidation}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextField
              type={showPassword ? 'text' : 'password'}
              label='Password'
              onChange={(e) => onChange(e)}
              onBlur={onBlur}
              value={value}
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
          )}
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
