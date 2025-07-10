'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';
import Button from '../button';
import Spinner from '../spinner';

const SubmitButton = ({
  children,
  ...props
}: React.ComponentProps<'button'>) => {
  const status = useFormStatus();
  return (
    <Button
      type='submit'
      {...props}
    >
      {status.pending ? <Spinner /> : children}
    </Button>
  );
};

export default SubmitButton;
