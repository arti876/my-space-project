import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import style from './Testing.module.scss';

export default function Testing() {
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
      <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.itemInput}>
          <TextField
            error={errors.firstName && true}
            type='text'
            id='first-name'
            label='First Name'
            variant='outlined'
            fullWidth
            {...register('firstName', {
              required: 'Required field',
              minLength: { value: 2, message: 'Minimum 2 characters' },
            })}
          />
          {errors?.firstName && <p>{errors?.firstName?.message}</p>}
        </div>
        <div className={style.itemInput}>
          <TextField
            error={errors.lastName && true}
            type='text'
            id='last-name'
            label='Last Name'
            variant='outlined'
            fullWidth
            {...register('lastName', {
              required: 'Required field',
              minLength: { value: 2, message: 'Minimum 2 characters' },
            })}
          />
          {errors?.lastName && <p>{errors?.lastName?.message}</p>}
        </div>
        <div className={style.itemInput}>
          <TextField
            error={errors.email && true}
            type='text'
            id='email'
            label='Email'
            variant='outlined'
            fullWidth
            {...register('email', {
              required: 'Required field',
              pattern: {
                value: /^[A-Za-z0-9+_.-]+@(.+)$/i,
                message: 'Enter the correct name',
              },
            })}
          />
          {errors?.email && <p>{errors?.email?.message}</p>}
        </div>
        <div className={style.itemInput}>
          <TextField
            error={errors.password && true}
            type='password'
            id='password'
            label='Password'
            variant='outlined'
            fullWidth
            {...register('password', {
              required: 'Required field',
              minLength: { value: 5, message: 'Minimum 5 characters' },
            })}
          />
          {errors?.password && <p>{errors?.password?.message}</p>}
        </div>
        <Button
          type='submit'
          variant='contained'
          size='large'
          fullWidth
          disabled={!isValid}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}
