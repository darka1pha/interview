'use client';

import { useActionState, useEffect } from 'react';
import { registerUser } from '@/lib/actions';
import type { ActionResult } from '@/lib/types';
import Input from '@/components/input';
import Form from 'next/form';
import SubmitButton from '@/components/submitButton';

const initialState: ActionResult = { error: {} };

const RegisterForm = () => {
  const [state, formAction] = useActionState(registerUser, initialState);

  useEffect(() => {
    if ('success' in state && state.success) {
      localStorage.setItem('user', JSON.stringify(state.user));
      window.location.href = '/';
    }
  }, [state]);

  return (
    <Form
      action={formAction}
      className='max-w-md w-full mx-auto p-6 space-y-6 bg-gray-900 rounded-xl shadow'
    >
      <h1 className='text-2xl font-bold'>Register</h1>

      <Input
        name='name'
        placeholder='Full Name'
        helperText={'error' in state ? state.error.name?.[0] : undefined}
        error={'error' in state && !!state.error.name}
      />

      <Input
        name='email'
        type='email'
        placeholder='Email'
        helperText={'error' in state ? state.error.email?.[0] : undefined}
        error={'error' in state && !!state.error.email}
      />

      <Input
        name='password'
        type='password'
        placeholder='Password'
        helperText={'error' in state ? state.error.password?.[0] : undefined}
        error={'error' in state && !!state.error.password}
      />

      <Input
        name='phone'
        placeholder='09121234567'
        helperText={'error' in state ? state.error.phone?.[0] : undefined}
        error={'error' in state && !!state.error.phone}
      />

      <SubmitButton
        className='w-full'
        type='submit'
      >
        Create Account
      </SubmitButton>
    </Form>
  );
};

export default RegisterForm;
