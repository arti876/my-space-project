import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import style from './Testing.module.scss';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 300,
    margin: 100,
  },
  resize: {
    fontSize: 50,
  },
};

export default function Testing() {
  const [showPassword, setShowPassword] = React.useState(false);

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

  const onSubmit = (data) => {
    // сюда можно записать логику при отправке формы
    console.log(data);
    reset();
  };

  return (
    <div className='wrapper-global'>
      {/* <form className={style.container} onSubmit={handleSubmit(onSubmit)}> */}

      <div className={style.theme}>
        <FormControl
          sx={{ mt: 5, width: '350px', display: 'flex', gap: 4.5 }}
          variant='outlined'
        >
          <TextField
            error={errors.firstName && true}
            type='text'
            id='first-name'
            label='First Name'
            variant='outlined'
            fullWidth
            helperText={errors?.firstName?.message}
            {...register('firstName', {
              required: 'Required field',
              minLength: { value: 2, message: 'Minimum 2 characters' },
            })}
          />
          <TextField
            sx={{ fontSize: 24 }}
            error={errors.lastName && true}
            type='text'
            id='last-name'
            label='Last Name'
            variant='outlined'
            fullWidth
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
            fullWidth
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
            fullWidth
            helperText={errors?.password?.message}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
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
            fullWidth
            disabled={!isValid}
          >
            Sign Up
          </Button>
        </FormControl>
      </div>
    </div>
  );
}

// <FormHelperText id='my-helper-text'>
// We'll never share your email.
// </FormHelperText>
